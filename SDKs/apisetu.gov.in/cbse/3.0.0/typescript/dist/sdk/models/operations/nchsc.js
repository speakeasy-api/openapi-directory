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
exports.NchscResponse = exports.NchscRequest = exports.Nchsc504ApplicationJson = exports.Nchsc504ApplicationJsonErrorDescriptionEnum = exports.Nchsc504ApplicationJsonErrorEnum = exports.Nchsc503ApplicationJson = exports.Nchsc503ApplicationJsonErrorDescriptionEnum = exports.Nchsc503ApplicationJsonErrorEnum = exports.Nchsc502ApplicationJson = exports.Nchsc502ApplicationJsonErrorDescriptionEnum = exports.Nchsc502ApplicationJsonErrorEnum = exports.Nchsc500ApplicationJson = exports.Nchsc500ApplicationJsonErrorDescriptionEnum = exports.Nchsc500ApplicationJsonErrorEnum = exports.Nchsc404ApplicationJson = exports.Nchsc404ApplicationJsonErrorDescriptionEnum = exports.Nchsc404ApplicationJsonErrorEnum = exports.Nchsc401ApplicationJson = exports.Nchsc401ApplicationJsonErrorDescriptionEnum = exports.Nchsc401ApplicationJsonErrorEnum = exports.Nchsc400ApplicationJson = exports.Nchsc400ApplicationJsonErrorDescriptionEnum = exports.Nchsc400ApplicationJsonErrorEnum = exports.NchscSecurity = exports.NchscRequestBody = exports.NchscRequestBodyFormatEnum = exports.NchscRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var NchscRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(NchscRequestBodyCertificateParameters, _super);
    function NchscRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], NchscRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rollno" }),
        __metadata("design:type", String)
    ], NchscRequestBodyCertificateParameters.prototype, "rollno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], NchscRequestBodyCertificateParameters.prototype, "year", void 0);
    return NchscRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.NchscRequestBodyCertificateParameters = NchscRequestBodyCertificateParameters;
var NchscRequestBodyFormatEnum;
(function (NchscRequestBodyFormatEnum) {
    NchscRequestBodyFormatEnum["Pdf"] = "pdf";
})(NchscRequestBodyFormatEnum = exports.NchscRequestBodyFormatEnum || (exports.NchscRequestBodyFormatEnum = {}));
var NchscRequestBody = /** @class */ (function (_super) {
    __extends(NchscRequestBody, _super);
    function NchscRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", NchscRequestBodyCertificateParameters)
    ], NchscRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], NchscRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], NchscRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], NchscRequestBody.prototype, "txnId", void 0);
    return NchscRequestBody;
}(utils_1.SpeakeasyBase));
exports.NchscRequestBody = NchscRequestBody;
var NchscSecurity = /** @class */ (function (_super) {
    __extends(NchscSecurity, _super);
    function NchscSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], NchscSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], NchscSecurity.prototype, "clientId", void 0);
    return NchscSecurity;
}(utils_1.SpeakeasyBase));
exports.NchscSecurity = NchscSecurity;
var Nchsc400ApplicationJsonErrorEnum;
(function (Nchsc400ApplicationJsonErrorEnum) {
    Nchsc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Nchsc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Nchsc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Nchsc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Nchsc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Nchsc400ApplicationJsonErrorEnum = exports.Nchsc400ApplicationJsonErrorEnum || (exports.Nchsc400ApplicationJsonErrorEnum = {}));
var Nchsc400ApplicationJsonErrorDescriptionEnum;
(function (Nchsc400ApplicationJsonErrorDescriptionEnum) {
    Nchsc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Nchsc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Nchsc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Nchsc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Nchsc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Nchsc400ApplicationJsonErrorDescriptionEnum = exports.Nchsc400ApplicationJsonErrorDescriptionEnum || (exports.Nchsc400ApplicationJsonErrorDescriptionEnum = {}));
var Nchsc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Nchsc400ApplicationJson, _super);
    function Nchsc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nchsc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nchsc400ApplicationJson.prototype, "errorDescription", void 0);
    return Nchsc400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nchsc400ApplicationJson = Nchsc400ApplicationJson;
var Nchsc401ApplicationJsonErrorEnum;
(function (Nchsc401ApplicationJsonErrorEnum) {
    Nchsc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Nchsc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Nchsc401ApplicationJsonErrorEnum = exports.Nchsc401ApplicationJsonErrorEnum || (exports.Nchsc401ApplicationJsonErrorEnum = {}));
var Nchsc401ApplicationJsonErrorDescriptionEnum;
(function (Nchsc401ApplicationJsonErrorDescriptionEnum) {
    Nchsc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Nchsc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Nchsc401ApplicationJsonErrorDescriptionEnum = exports.Nchsc401ApplicationJsonErrorDescriptionEnum || (exports.Nchsc401ApplicationJsonErrorDescriptionEnum = {}));
var Nchsc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Nchsc401ApplicationJson, _super);
    function Nchsc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nchsc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nchsc401ApplicationJson.prototype, "errorDescription", void 0);
    return Nchsc401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nchsc401ApplicationJson = Nchsc401ApplicationJson;
var Nchsc404ApplicationJsonErrorEnum;
(function (Nchsc404ApplicationJsonErrorEnum) {
    Nchsc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Nchsc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Nchsc404ApplicationJsonErrorEnum = exports.Nchsc404ApplicationJsonErrorEnum || (exports.Nchsc404ApplicationJsonErrorEnum = {}));
var Nchsc404ApplicationJsonErrorDescriptionEnum;
(function (Nchsc404ApplicationJsonErrorDescriptionEnum) {
    Nchsc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Nchsc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Nchsc404ApplicationJsonErrorDescriptionEnum = exports.Nchsc404ApplicationJsonErrorDescriptionEnum || (exports.Nchsc404ApplicationJsonErrorDescriptionEnum = {}));
var Nchsc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Nchsc404ApplicationJson, _super);
    function Nchsc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nchsc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nchsc404ApplicationJson.prototype, "errorDescription", void 0);
    return Nchsc404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nchsc404ApplicationJson = Nchsc404ApplicationJson;
var Nchsc500ApplicationJsonErrorEnum;
(function (Nchsc500ApplicationJsonErrorEnum) {
    Nchsc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Nchsc500ApplicationJsonErrorEnum = exports.Nchsc500ApplicationJsonErrorEnum || (exports.Nchsc500ApplicationJsonErrorEnum = {}));
var Nchsc500ApplicationJsonErrorDescriptionEnum;
(function (Nchsc500ApplicationJsonErrorDescriptionEnum) {
    Nchsc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Nchsc500ApplicationJsonErrorDescriptionEnum = exports.Nchsc500ApplicationJsonErrorDescriptionEnum || (exports.Nchsc500ApplicationJsonErrorDescriptionEnum = {}));
var Nchsc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Nchsc500ApplicationJson, _super);
    function Nchsc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nchsc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nchsc500ApplicationJson.prototype, "errorDescription", void 0);
    return Nchsc500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nchsc500ApplicationJson = Nchsc500ApplicationJson;
var Nchsc502ApplicationJsonErrorEnum;
(function (Nchsc502ApplicationJsonErrorEnum) {
    Nchsc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Nchsc502ApplicationJsonErrorEnum = exports.Nchsc502ApplicationJsonErrorEnum || (exports.Nchsc502ApplicationJsonErrorEnum = {}));
var Nchsc502ApplicationJsonErrorDescriptionEnum;
(function (Nchsc502ApplicationJsonErrorDescriptionEnum) {
    Nchsc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Nchsc502ApplicationJsonErrorDescriptionEnum = exports.Nchsc502ApplicationJsonErrorDescriptionEnum || (exports.Nchsc502ApplicationJsonErrorDescriptionEnum = {}));
var Nchsc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Nchsc502ApplicationJson, _super);
    function Nchsc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nchsc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nchsc502ApplicationJson.prototype, "errorDescription", void 0);
    return Nchsc502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nchsc502ApplicationJson = Nchsc502ApplicationJson;
var Nchsc503ApplicationJsonErrorEnum;
(function (Nchsc503ApplicationJsonErrorEnum) {
    Nchsc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Nchsc503ApplicationJsonErrorEnum = exports.Nchsc503ApplicationJsonErrorEnum || (exports.Nchsc503ApplicationJsonErrorEnum = {}));
var Nchsc503ApplicationJsonErrorDescriptionEnum;
(function (Nchsc503ApplicationJsonErrorDescriptionEnum) {
    Nchsc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Nchsc503ApplicationJsonErrorDescriptionEnum = exports.Nchsc503ApplicationJsonErrorDescriptionEnum || (exports.Nchsc503ApplicationJsonErrorDescriptionEnum = {}));
var Nchsc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Nchsc503ApplicationJson, _super);
    function Nchsc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nchsc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nchsc503ApplicationJson.prototype, "errorDescription", void 0);
    return Nchsc503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nchsc503ApplicationJson = Nchsc503ApplicationJson;
var Nchsc504ApplicationJsonErrorEnum;
(function (Nchsc504ApplicationJsonErrorEnum) {
    Nchsc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Nchsc504ApplicationJsonErrorEnum = exports.Nchsc504ApplicationJsonErrorEnum || (exports.Nchsc504ApplicationJsonErrorEnum = {}));
var Nchsc504ApplicationJsonErrorDescriptionEnum;
(function (Nchsc504ApplicationJsonErrorDescriptionEnum) {
    Nchsc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Nchsc504ApplicationJsonErrorDescriptionEnum = exports.Nchsc504ApplicationJsonErrorDescriptionEnum || (exports.Nchsc504ApplicationJsonErrorDescriptionEnum = {}));
var Nchsc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Nchsc504ApplicationJson, _super);
    function Nchsc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nchsc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nchsc504ApplicationJson.prototype, "errorDescription", void 0);
    return Nchsc504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nchsc504ApplicationJson = Nchsc504ApplicationJson;
var NchscRequest = /** @class */ (function (_super) {
    __extends(NchscRequest, _super);
    function NchscRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", NchscRequestBody)
    ], NchscRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", NchscSecurity)
    ], NchscRequest.prototype, "security", void 0);
    return NchscRequest;
}(utils_1.SpeakeasyBase));
exports.NchscRequest = NchscRequest;
var NchscResponse = /** @class */ (function (_super) {
    __extends(NchscResponse, _super);
    function NchscResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], NchscResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], NchscResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nchsc400ApplicationJson)
    ], NchscResponse.prototype, "nchsc400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nchsc401ApplicationJson)
    ], NchscResponse.prototype, "nchsc401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nchsc404ApplicationJson)
    ], NchscResponse.prototype, "nchsc404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nchsc500ApplicationJson)
    ], NchscResponse.prototype, "nchsc500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nchsc502ApplicationJson)
    ], NchscResponse.prototype, "nchsc502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nchsc503ApplicationJson)
    ], NchscResponse.prototype, "nchsc503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nchsc504ApplicationJson)
    ], NchscResponse.prototype, "nchsc504ApplicationJSONObject", void 0);
    return NchscResponse;
}(utils_1.SpeakeasyBase));
exports.NchscResponse = NchscResponse;
