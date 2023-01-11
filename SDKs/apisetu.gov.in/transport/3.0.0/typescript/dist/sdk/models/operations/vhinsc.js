"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VhinscResponse = exports.VhinscRequest = exports.Vhinsc504ApplicationJson = exports.Vhinsc504ApplicationJsonErrorDescriptionEnum = exports.Vhinsc504ApplicationJsonErrorEnum = exports.Vhinsc503ApplicationJson = exports.Vhinsc503ApplicationJsonErrorDescriptionEnum = exports.Vhinsc503ApplicationJsonErrorEnum = exports.Vhinsc502ApplicationJson = exports.Vhinsc502ApplicationJsonErrorDescriptionEnum = exports.Vhinsc502ApplicationJsonErrorEnum = exports.Vhinsc500ApplicationJson = exports.Vhinsc500ApplicationJsonErrorDescriptionEnum = exports.Vhinsc500ApplicationJsonErrorEnum = exports.Vhinsc404ApplicationJson = exports.Vhinsc404ApplicationJsonErrorDescriptionEnum = exports.Vhinsc404ApplicationJsonErrorEnum = exports.Vhinsc401ApplicationJson = exports.Vhinsc401ApplicationJsonErrorDescriptionEnum = exports.Vhinsc401ApplicationJsonErrorEnum = exports.Vhinsc400ApplicationJson = exports.Vhinsc400ApplicationJsonErrorDescriptionEnum = exports.Vhinsc400ApplicationJsonErrorEnum = exports.VhinscSecurity = exports.VhinscRequestBody = exports.VhinscRequestBodyFormatEnum = exports.VhinscRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var VhinscRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(VhinscRequestBodyCertificateParameters, _super);
    function VhinscRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], VhinscRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], VhinscRequestBodyCertificateParameters.prototype, "uid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chasis_no" }),
        __metadata("design:type", String)
    ], VhinscRequestBodyCertificateParameters.prototype, "chasisNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reg_no" }),
        __metadata("design:type", String)
    ], VhinscRequestBodyCertificateParameters.prototype, "regNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=swd_name" }),
        __metadata("design:type", String)
    ], VhinscRequestBodyCertificateParameters.prototype, "swdName", void 0);
    return VhinscRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.VhinscRequestBodyCertificateParameters = VhinscRequestBodyCertificateParameters;
var VhinscRequestBodyFormatEnum;
(function (VhinscRequestBodyFormatEnum) {
    VhinscRequestBodyFormatEnum["Pdf"] = "pdf";
})(VhinscRequestBodyFormatEnum = exports.VhinscRequestBodyFormatEnum || (exports.VhinscRequestBodyFormatEnum = {}));
var VhinscRequestBody = /** @class */ (function (_super) {
    __extends(VhinscRequestBody, _super);
    function VhinscRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", VhinscRequestBodyCertificateParameters)
    ], VhinscRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], VhinscRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], VhinscRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], VhinscRequestBody.prototype, "txnId", void 0);
    return VhinscRequestBody;
}(utils_1.SpeakeasyBase));
exports.VhinscRequestBody = VhinscRequestBody;
var VhinscSecurity = /** @class */ (function (_super) {
    __extends(VhinscSecurity, _super);
    function VhinscSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], VhinscSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], VhinscSecurity.prototype, "clientId", void 0);
    return VhinscSecurity;
}(utils_1.SpeakeasyBase));
exports.VhinscSecurity = VhinscSecurity;
var Vhinsc400ApplicationJsonErrorEnum;
(function (Vhinsc400ApplicationJsonErrorEnum) {
    Vhinsc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Vhinsc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Vhinsc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Vhinsc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Vhinsc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Vhinsc400ApplicationJsonErrorEnum = exports.Vhinsc400ApplicationJsonErrorEnum || (exports.Vhinsc400ApplicationJsonErrorEnum = {}));
var Vhinsc400ApplicationJsonErrorDescriptionEnum;
(function (Vhinsc400ApplicationJsonErrorDescriptionEnum) {
    Vhinsc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Vhinsc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Vhinsc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Vhinsc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Vhinsc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Vhinsc400ApplicationJsonErrorDescriptionEnum = exports.Vhinsc400ApplicationJsonErrorDescriptionEnum || (exports.Vhinsc400ApplicationJsonErrorDescriptionEnum = {}));
var Vhinsc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhinsc400ApplicationJson, _super);
    function Vhinsc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhinsc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhinsc400ApplicationJson.prototype, "errorDescription", void 0);
    return Vhinsc400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vhinsc400ApplicationJson = Vhinsc400ApplicationJson;
var Vhinsc401ApplicationJsonErrorEnum;
(function (Vhinsc401ApplicationJsonErrorEnum) {
    Vhinsc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Vhinsc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Vhinsc401ApplicationJsonErrorEnum = exports.Vhinsc401ApplicationJsonErrorEnum || (exports.Vhinsc401ApplicationJsonErrorEnum = {}));
var Vhinsc401ApplicationJsonErrorDescriptionEnum;
(function (Vhinsc401ApplicationJsonErrorDescriptionEnum) {
    Vhinsc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Vhinsc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Vhinsc401ApplicationJsonErrorDescriptionEnum = exports.Vhinsc401ApplicationJsonErrorDescriptionEnum || (exports.Vhinsc401ApplicationJsonErrorDescriptionEnum = {}));
var Vhinsc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhinsc401ApplicationJson, _super);
    function Vhinsc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhinsc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhinsc401ApplicationJson.prototype, "errorDescription", void 0);
    return Vhinsc401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vhinsc401ApplicationJson = Vhinsc401ApplicationJson;
var Vhinsc404ApplicationJsonErrorEnum;
(function (Vhinsc404ApplicationJsonErrorEnum) {
    Vhinsc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Vhinsc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Vhinsc404ApplicationJsonErrorEnum = exports.Vhinsc404ApplicationJsonErrorEnum || (exports.Vhinsc404ApplicationJsonErrorEnum = {}));
var Vhinsc404ApplicationJsonErrorDescriptionEnum;
(function (Vhinsc404ApplicationJsonErrorDescriptionEnum) {
    Vhinsc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Vhinsc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Vhinsc404ApplicationJsonErrorDescriptionEnum = exports.Vhinsc404ApplicationJsonErrorDescriptionEnum || (exports.Vhinsc404ApplicationJsonErrorDescriptionEnum = {}));
var Vhinsc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhinsc404ApplicationJson, _super);
    function Vhinsc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhinsc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhinsc404ApplicationJson.prototype, "errorDescription", void 0);
    return Vhinsc404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vhinsc404ApplicationJson = Vhinsc404ApplicationJson;
var Vhinsc500ApplicationJsonErrorEnum;
(function (Vhinsc500ApplicationJsonErrorEnum) {
    Vhinsc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Vhinsc500ApplicationJsonErrorEnum = exports.Vhinsc500ApplicationJsonErrorEnum || (exports.Vhinsc500ApplicationJsonErrorEnum = {}));
var Vhinsc500ApplicationJsonErrorDescriptionEnum;
(function (Vhinsc500ApplicationJsonErrorDescriptionEnum) {
    Vhinsc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Vhinsc500ApplicationJsonErrorDescriptionEnum = exports.Vhinsc500ApplicationJsonErrorDescriptionEnum || (exports.Vhinsc500ApplicationJsonErrorDescriptionEnum = {}));
var Vhinsc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhinsc500ApplicationJson, _super);
    function Vhinsc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhinsc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhinsc500ApplicationJson.prototype, "errorDescription", void 0);
    return Vhinsc500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vhinsc500ApplicationJson = Vhinsc500ApplicationJson;
var Vhinsc502ApplicationJsonErrorEnum;
(function (Vhinsc502ApplicationJsonErrorEnum) {
    Vhinsc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Vhinsc502ApplicationJsonErrorEnum = exports.Vhinsc502ApplicationJsonErrorEnum || (exports.Vhinsc502ApplicationJsonErrorEnum = {}));
var Vhinsc502ApplicationJsonErrorDescriptionEnum;
(function (Vhinsc502ApplicationJsonErrorDescriptionEnum) {
    Vhinsc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Vhinsc502ApplicationJsonErrorDescriptionEnum = exports.Vhinsc502ApplicationJsonErrorDescriptionEnum || (exports.Vhinsc502ApplicationJsonErrorDescriptionEnum = {}));
var Vhinsc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhinsc502ApplicationJson, _super);
    function Vhinsc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhinsc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhinsc502ApplicationJson.prototype, "errorDescription", void 0);
    return Vhinsc502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vhinsc502ApplicationJson = Vhinsc502ApplicationJson;
var Vhinsc503ApplicationJsonErrorEnum;
(function (Vhinsc503ApplicationJsonErrorEnum) {
    Vhinsc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Vhinsc503ApplicationJsonErrorEnum = exports.Vhinsc503ApplicationJsonErrorEnum || (exports.Vhinsc503ApplicationJsonErrorEnum = {}));
var Vhinsc503ApplicationJsonErrorDescriptionEnum;
(function (Vhinsc503ApplicationJsonErrorDescriptionEnum) {
    Vhinsc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Vhinsc503ApplicationJsonErrorDescriptionEnum = exports.Vhinsc503ApplicationJsonErrorDescriptionEnum || (exports.Vhinsc503ApplicationJsonErrorDescriptionEnum = {}));
var Vhinsc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhinsc503ApplicationJson, _super);
    function Vhinsc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhinsc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhinsc503ApplicationJson.prototype, "errorDescription", void 0);
    return Vhinsc503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vhinsc503ApplicationJson = Vhinsc503ApplicationJson;
var Vhinsc504ApplicationJsonErrorEnum;
(function (Vhinsc504ApplicationJsonErrorEnum) {
    Vhinsc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Vhinsc504ApplicationJsonErrorEnum = exports.Vhinsc504ApplicationJsonErrorEnum || (exports.Vhinsc504ApplicationJsonErrorEnum = {}));
var Vhinsc504ApplicationJsonErrorDescriptionEnum;
(function (Vhinsc504ApplicationJsonErrorDescriptionEnum) {
    Vhinsc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Vhinsc504ApplicationJsonErrorDescriptionEnum = exports.Vhinsc504ApplicationJsonErrorDescriptionEnum || (exports.Vhinsc504ApplicationJsonErrorDescriptionEnum = {}));
var Vhinsc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhinsc504ApplicationJson, _super);
    function Vhinsc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhinsc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhinsc504ApplicationJson.prototype, "errorDescription", void 0);
    return Vhinsc504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vhinsc504ApplicationJson = Vhinsc504ApplicationJson;
var VhinscRequest = /** @class */ (function (_super) {
    __extends(VhinscRequest, _super);
    function VhinscRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", VhinscRequestBody)
    ], VhinscRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", VhinscSecurity)
    ], VhinscRequest.prototype, "security", void 0);
    return VhinscRequest;
}(utils_1.SpeakeasyBase));
exports.VhinscRequest = VhinscRequest;
var VhinscResponse = /** @class */ (function (_super) {
    __extends(VhinscResponse, _super);
    function VhinscResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], VhinscResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], VhinscResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vhinsc400ApplicationJson)
    ], VhinscResponse.prototype, "vhinsc400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vhinsc401ApplicationJson)
    ], VhinscResponse.prototype, "vhinsc401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vhinsc404ApplicationJson)
    ], VhinscResponse.prototype, "vhinsc404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vhinsc500ApplicationJson)
    ], VhinscResponse.prototype, "vhinsc500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vhinsc502ApplicationJson)
    ], VhinscResponse.prototype, "vhinsc502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vhinsc503ApplicationJson)
    ], VhinscResponse.prototype, "vhinsc503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vhinsc504ApplicationJson)
    ], VhinscResponse.prototype, "vhinsc504ApplicationJSONObject", void 0);
    return VhinscResponse;
}(utils_1.SpeakeasyBase));
exports.VhinscResponse = VhinscResponse;
