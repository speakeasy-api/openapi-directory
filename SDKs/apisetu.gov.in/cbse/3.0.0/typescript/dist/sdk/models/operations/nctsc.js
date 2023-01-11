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
exports.NctscResponse = exports.NctscRequest = exports.Nctsc504ApplicationJson = exports.Nctsc504ApplicationJsonErrorDescriptionEnum = exports.Nctsc504ApplicationJsonErrorEnum = exports.Nctsc503ApplicationJson = exports.Nctsc503ApplicationJsonErrorDescriptionEnum = exports.Nctsc503ApplicationJsonErrorEnum = exports.Nctsc502ApplicationJson = exports.Nctsc502ApplicationJsonErrorDescriptionEnum = exports.Nctsc502ApplicationJsonErrorEnum = exports.Nctsc500ApplicationJson = exports.Nctsc500ApplicationJsonErrorDescriptionEnum = exports.Nctsc500ApplicationJsonErrorEnum = exports.Nctsc404ApplicationJson = exports.Nctsc404ApplicationJsonErrorDescriptionEnum = exports.Nctsc404ApplicationJsonErrorEnum = exports.Nctsc401ApplicationJson = exports.Nctsc401ApplicationJsonErrorDescriptionEnum = exports.Nctsc401ApplicationJsonErrorEnum = exports.Nctsc400ApplicationJson = exports.Nctsc400ApplicationJsonErrorDescriptionEnum = exports.Nctsc400ApplicationJsonErrorEnum = exports.NctscSecurity = exports.NctscRequestBody = exports.NctscRequestBodyFormatEnum = exports.NctscRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var NctscRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(NctscRequestBodyCertificateParameters, _super);
    function NctscRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], NctscRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rollno" }),
        __metadata("design:type", String)
    ], NctscRequestBodyCertificateParameters.prototype, "rollno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], NctscRequestBodyCertificateParameters.prototype, "year", void 0);
    return NctscRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.NctscRequestBodyCertificateParameters = NctscRequestBodyCertificateParameters;
var NctscRequestBodyFormatEnum;
(function (NctscRequestBodyFormatEnum) {
    NctscRequestBodyFormatEnum["Pdf"] = "pdf";
})(NctscRequestBodyFormatEnum = exports.NctscRequestBodyFormatEnum || (exports.NctscRequestBodyFormatEnum = {}));
var NctscRequestBody = /** @class */ (function (_super) {
    __extends(NctscRequestBody, _super);
    function NctscRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", NctscRequestBodyCertificateParameters)
    ], NctscRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], NctscRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], NctscRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], NctscRequestBody.prototype, "txnId", void 0);
    return NctscRequestBody;
}(utils_1.SpeakeasyBase));
exports.NctscRequestBody = NctscRequestBody;
var NctscSecurity = /** @class */ (function (_super) {
    __extends(NctscSecurity, _super);
    function NctscSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], NctscSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], NctscSecurity.prototype, "clientId", void 0);
    return NctscSecurity;
}(utils_1.SpeakeasyBase));
exports.NctscSecurity = NctscSecurity;
var Nctsc400ApplicationJsonErrorEnum;
(function (Nctsc400ApplicationJsonErrorEnum) {
    Nctsc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Nctsc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Nctsc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Nctsc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Nctsc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Nctsc400ApplicationJsonErrorEnum = exports.Nctsc400ApplicationJsonErrorEnum || (exports.Nctsc400ApplicationJsonErrorEnum = {}));
var Nctsc400ApplicationJsonErrorDescriptionEnum;
(function (Nctsc400ApplicationJsonErrorDescriptionEnum) {
    Nctsc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Nctsc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Nctsc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Nctsc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Nctsc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Nctsc400ApplicationJsonErrorDescriptionEnum = exports.Nctsc400ApplicationJsonErrorDescriptionEnum || (exports.Nctsc400ApplicationJsonErrorDescriptionEnum = {}));
var Nctsc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Nctsc400ApplicationJson, _super);
    function Nctsc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nctsc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nctsc400ApplicationJson.prototype, "errorDescription", void 0);
    return Nctsc400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nctsc400ApplicationJson = Nctsc400ApplicationJson;
var Nctsc401ApplicationJsonErrorEnum;
(function (Nctsc401ApplicationJsonErrorEnum) {
    Nctsc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Nctsc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Nctsc401ApplicationJsonErrorEnum = exports.Nctsc401ApplicationJsonErrorEnum || (exports.Nctsc401ApplicationJsonErrorEnum = {}));
var Nctsc401ApplicationJsonErrorDescriptionEnum;
(function (Nctsc401ApplicationJsonErrorDescriptionEnum) {
    Nctsc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Nctsc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Nctsc401ApplicationJsonErrorDescriptionEnum = exports.Nctsc401ApplicationJsonErrorDescriptionEnum || (exports.Nctsc401ApplicationJsonErrorDescriptionEnum = {}));
var Nctsc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Nctsc401ApplicationJson, _super);
    function Nctsc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nctsc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nctsc401ApplicationJson.prototype, "errorDescription", void 0);
    return Nctsc401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nctsc401ApplicationJson = Nctsc401ApplicationJson;
var Nctsc404ApplicationJsonErrorEnum;
(function (Nctsc404ApplicationJsonErrorEnum) {
    Nctsc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Nctsc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Nctsc404ApplicationJsonErrorEnum = exports.Nctsc404ApplicationJsonErrorEnum || (exports.Nctsc404ApplicationJsonErrorEnum = {}));
var Nctsc404ApplicationJsonErrorDescriptionEnum;
(function (Nctsc404ApplicationJsonErrorDescriptionEnum) {
    Nctsc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Nctsc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Nctsc404ApplicationJsonErrorDescriptionEnum = exports.Nctsc404ApplicationJsonErrorDescriptionEnum || (exports.Nctsc404ApplicationJsonErrorDescriptionEnum = {}));
var Nctsc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Nctsc404ApplicationJson, _super);
    function Nctsc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nctsc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nctsc404ApplicationJson.prototype, "errorDescription", void 0);
    return Nctsc404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nctsc404ApplicationJson = Nctsc404ApplicationJson;
var Nctsc500ApplicationJsonErrorEnum;
(function (Nctsc500ApplicationJsonErrorEnum) {
    Nctsc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Nctsc500ApplicationJsonErrorEnum = exports.Nctsc500ApplicationJsonErrorEnum || (exports.Nctsc500ApplicationJsonErrorEnum = {}));
var Nctsc500ApplicationJsonErrorDescriptionEnum;
(function (Nctsc500ApplicationJsonErrorDescriptionEnum) {
    Nctsc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Nctsc500ApplicationJsonErrorDescriptionEnum = exports.Nctsc500ApplicationJsonErrorDescriptionEnum || (exports.Nctsc500ApplicationJsonErrorDescriptionEnum = {}));
var Nctsc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Nctsc500ApplicationJson, _super);
    function Nctsc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nctsc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nctsc500ApplicationJson.prototype, "errorDescription", void 0);
    return Nctsc500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nctsc500ApplicationJson = Nctsc500ApplicationJson;
var Nctsc502ApplicationJsonErrorEnum;
(function (Nctsc502ApplicationJsonErrorEnum) {
    Nctsc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Nctsc502ApplicationJsonErrorEnum = exports.Nctsc502ApplicationJsonErrorEnum || (exports.Nctsc502ApplicationJsonErrorEnum = {}));
var Nctsc502ApplicationJsonErrorDescriptionEnum;
(function (Nctsc502ApplicationJsonErrorDescriptionEnum) {
    Nctsc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Nctsc502ApplicationJsonErrorDescriptionEnum = exports.Nctsc502ApplicationJsonErrorDescriptionEnum || (exports.Nctsc502ApplicationJsonErrorDescriptionEnum = {}));
var Nctsc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Nctsc502ApplicationJson, _super);
    function Nctsc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nctsc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nctsc502ApplicationJson.prototype, "errorDescription", void 0);
    return Nctsc502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nctsc502ApplicationJson = Nctsc502ApplicationJson;
var Nctsc503ApplicationJsonErrorEnum;
(function (Nctsc503ApplicationJsonErrorEnum) {
    Nctsc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Nctsc503ApplicationJsonErrorEnum = exports.Nctsc503ApplicationJsonErrorEnum || (exports.Nctsc503ApplicationJsonErrorEnum = {}));
var Nctsc503ApplicationJsonErrorDescriptionEnum;
(function (Nctsc503ApplicationJsonErrorDescriptionEnum) {
    Nctsc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Nctsc503ApplicationJsonErrorDescriptionEnum = exports.Nctsc503ApplicationJsonErrorDescriptionEnum || (exports.Nctsc503ApplicationJsonErrorDescriptionEnum = {}));
var Nctsc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Nctsc503ApplicationJson, _super);
    function Nctsc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nctsc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nctsc503ApplicationJson.prototype, "errorDescription", void 0);
    return Nctsc503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nctsc503ApplicationJson = Nctsc503ApplicationJson;
var Nctsc504ApplicationJsonErrorEnum;
(function (Nctsc504ApplicationJsonErrorEnum) {
    Nctsc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Nctsc504ApplicationJsonErrorEnum = exports.Nctsc504ApplicationJsonErrorEnum || (exports.Nctsc504ApplicationJsonErrorEnum = {}));
var Nctsc504ApplicationJsonErrorDescriptionEnum;
(function (Nctsc504ApplicationJsonErrorDescriptionEnum) {
    Nctsc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Nctsc504ApplicationJsonErrorDescriptionEnum = exports.Nctsc504ApplicationJsonErrorDescriptionEnum || (exports.Nctsc504ApplicationJsonErrorDescriptionEnum = {}));
var Nctsc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Nctsc504ApplicationJson, _super);
    function Nctsc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nctsc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nctsc504ApplicationJson.prototype, "errorDescription", void 0);
    return Nctsc504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nctsc504ApplicationJson = Nctsc504ApplicationJson;
var NctscRequest = /** @class */ (function (_super) {
    __extends(NctscRequest, _super);
    function NctscRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", NctscRequestBody)
    ], NctscRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", NctscSecurity)
    ], NctscRequest.prototype, "security", void 0);
    return NctscRequest;
}(utils_1.SpeakeasyBase));
exports.NctscRequest = NctscRequest;
var NctscResponse = /** @class */ (function (_super) {
    __extends(NctscResponse, _super);
    function NctscResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], NctscResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], NctscResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nctsc400ApplicationJson)
    ], NctscResponse.prototype, "nctsc400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nctsc401ApplicationJson)
    ], NctscResponse.prototype, "nctsc401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nctsc404ApplicationJson)
    ], NctscResponse.prototype, "nctsc404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nctsc500ApplicationJson)
    ], NctscResponse.prototype, "nctsc500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nctsc502ApplicationJson)
    ], NctscResponse.prototype, "nctsc502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nctsc503ApplicationJson)
    ], NctscResponse.prototype, "nctsc503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nctsc504ApplicationJson)
    ], NctscResponse.prototype, "nctsc504ApplicationJSONObject", void 0);
    return NctscResponse;
}(utils_1.SpeakeasyBase));
exports.NctscResponse = NctscResponse;
