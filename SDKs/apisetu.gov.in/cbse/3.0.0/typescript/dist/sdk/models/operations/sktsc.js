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
exports.SktscResponse = exports.SktscRequest = exports.Sktsc504ApplicationJson = exports.Sktsc504ApplicationJsonErrorDescriptionEnum = exports.Sktsc504ApplicationJsonErrorEnum = exports.Sktsc503ApplicationJson = exports.Sktsc503ApplicationJsonErrorDescriptionEnum = exports.Sktsc503ApplicationJsonErrorEnum = exports.Sktsc502ApplicationJson = exports.Sktsc502ApplicationJsonErrorDescriptionEnum = exports.Sktsc502ApplicationJsonErrorEnum = exports.Sktsc500ApplicationJson = exports.Sktsc500ApplicationJsonErrorDescriptionEnum = exports.Sktsc500ApplicationJsonErrorEnum = exports.Sktsc404ApplicationJson = exports.Sktsc404ApplicationJsonErrorDescriptionEnum = exports.Sktsc404ApplicationJsonErrorEnum = exports.Sktsc401ApplicationJson = exports.Sktsc401ApplicationJsonErrorDescriptionEnum = exports.Sktsc401ApplicationJsonErrorEnum = exports.Sktsc400ApplicationJson = exports.Sktsc400ApplicationJsonErrorDescriptionEnum = exports.Sktsc400ApplicationJsonErrorEnum = exports.SktscSecurity = exports.SktscRequestBody = exports.SktscRequestBodyFormatEnum = exports.SktscRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SktscRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(SktscRequestBodyCertificateParameters, _super);
    function SktscRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], SktscRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rollno" }),
        __metadata("design:type", String)
    ], SktscRequestBodyCertificateParameters.prototype, "rollno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], SktscRequestBodyCertificateParameters.prototype, "year", void 0);
    return SktscRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.SktscRequestBodyCertificateParameters = SktscRequestBodyCertificateParameters;
var SktscRequestBodyFormatEnum;
(function (SktscRequestBodyFormatEnum) {
    SktscRequestBodyFormatEnum["Pdf"] = "pdf";
})(SktscRequestBodyFormatEnum = exports.SktscRequestBodyFormatEnum || (exports.SktscRequestBodyFormatEnum = {}));
var SktscRequestBody = /** @class */ (function (_super) {
    __extends(SktscRequestBody, _super);
    function SktscRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", SktscRequestBodyCertificateParameters)
    ], SktscRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], SktscRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SktscRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], SktscRequestBody.prototype, "txnId", void 0);
    return SktscRequestBody;
}(utils_1.SpeakeasyBase));
exports.SktscRequestBody = SktscRequestBody;
var SktscSecurity = /** @class */ (function (_super) {
    __extends(SktscSecurity, _super);
    function SktscSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SktscSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], SktscSecurity.prototype, "clientId", void 0);
    return SktscSecurity;
}(utils_1.SpeakeasyBase));
exports.SktscSecurity = SktscSecurity;
var Sktsc400ApplicationJsonErrorEnum;
(function (Sktsc400ApplicationJsonErrorEnum) {
    Sktsc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Sktsc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Sktsc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Sktsc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Sktsc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Sktsc400ApplicationJsonErrorEnum = exports.Sktsc400ApplicationJsonErrorEnum || (exports.Sktsc400ApplicationJsonErrorEnum = {}));
var Sktsc400ApplicationJsonErrorDescriptionEnum;
(function (Sktsc400ApplicationJsonErrorDescriptionEnum) {
    Sktsc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Sktsc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Sktsc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Sktsc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Sktsc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Sktsc400ApplicationJsonErrorDescriptionEnum = exports.Sktsc400ApplicationJsonErrorDescriptionEnum || (exports.Sktsc400ApplicationJsonErrorDescriptionEnum = {}));
var Sktsc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Sktsc400ApplicationJson, _super);
    function Sktsc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sktsc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sktsc400ApplicationJson.prototype, "errorDescription", void 0);
    return Sktsc400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sktsc400ApplicationJson = Sktsc400ApplicationJson;
var Sktsc401ApplicationJsonErrorEnum;
(function (Sktsc401ApplicationJsonErrorEnum) {
    Sktsc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Sktsc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Sktsc401ApplicationJsonErrorEnum = exports.Sktsc401ApplicationJsonErrorEnum || (exports.Sktsc401ApplicationJsonErrorEnum = {}));
var Sktsc401ApplicationJsonErrorDescriptionEnum;
(function (Sktsc401ApplicationJsonErrorDescriptionEnum) {
    Sktsc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Sktsc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Sktsc401ApplicationJsonErrorDescriptionEnum = exports.Sktsc401ApplicationJsonErrorDescriptionEnum || (exports.Sktsc401ApplicationJsonErrorDescriptionEnum = {}));
var Sktsc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Sktsc401ApplicationJson, _super);
    function Sktsc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sktsc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sktsc401ApplicationJson.prototype, "errorDescription", void 0);
    return Sktsc401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sktsc401ApplicationJson = Sktsc401ApplicationJson;
var Sktsc404ApplicationJsonErrorEnum;
(function (Sktsc404ApplicationJsonErrorEnum) {
    Sktsc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Sktsc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Sktsc404ApplicationJsonErrorEnum = exports.Sktsc404ApplicationJsonErrorEnum || (exports.Sktsc404ApplicationJsonErrorEnum = {}));
var Sktsc404ApplicationJsonErrorDescriptionEnum;
(function (Sktsc404ApplicationJsonErrorDescriptionEnum) {
    Sktsc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Sktsc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Sktsc404ApplicationJsonErrorDescriptionEnum = exports.Sktsc404ApplicationJsonErrorDescriptionEnum || (exports.Sktsc404ApplicationJsonErrorDescriptionEnum = {}));
var Sktsc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Sktsc404ApplicationJson, _super);
    function Sktsc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sktsc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sktsc404ApplicationJson.prototype, "errorDescription", void 0);
    return Sktsc404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sktsc404ApplicationJson = Sktsc404ApplicationJson;
var Sktsc500ApplicationJsonErrorEnum;
(function (Sktsc500ApplicationJsonErrorEnum) {
    Sktsc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Sktsc500ApplicationJsonErrorEnum = exports.Sktsc500ApplicationJsonErrorEnum || (exports.Sktsc500ApplicationJsonErrorEnum = {}));
var Sktsc500ApplicationJsonErrorDescriptionEnum;
(function (Sktsc500ApplicationJsonErrorDescriptionEnum) {
    Sktsc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Sktsc500ApplicationJsonErrorDescriptionEnum = exports.Sktsc500ApplicationJsonErrorDescriptionEnum || (exports.Sktsc500ApplicationJsonErrorDescriptionEnum = {}));
var Sktsc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Sktsc500ApplicationJson, _super);
    function Sktsc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sktsc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sktsc500ApplicationJson.prototype, "errorDescription", void 0);
    return Sktsc500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sktsc500ApplicationJson = Sktsc500ApplicationJson;
var Sktsc502ApplicationJsonErrorEnum;
(function (Sktsc502ApplicationJsonErrorEnum) {
    Sktsc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Sktsc502ApplicationJsonErrorEnum = exports.Sktsc502ApplicationJsonErrorEnum || (exports.Sktsc502ApplicationJsonErrorEnum = {}));
var Sktsc502ApplicationJsonErrorDescriptionEnum;
(function (Sktsc502ApplicationJsonErrorDescriptionEnum) {
    Sktsc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Sktsc502ApplicationJsonErrorDescriptionEnum = exports.Sktsc502ApplicationJsonErrorDescriptionEnum || (exports.Sktsc502ApplicationJsonErrorDescriptionEnum = {}));
var Sktsc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Sktsc502ApplicationJson, _super);
    function Sktsc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sktsc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sktsc502ApplicationJson.prototype, "errorDescription", void 0);
    return Sktsc502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sktsc502ApplicationJson = Sktsc502ApplicationJson;
var Sktsc503ApplicationJsonErrorEnum;
(function (Sktsc503ApplicationJsonErrorEnum) {
    Sktsc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Sktsc503ApplicationJsonErrorEnum = exports.Sktsc503ApplicationJsonErrorEnum || (exports.Sktsc503ApplicationJsonErrorEnum = {}));
var Sktsc503ApplicationJsonErrorDescriptionEnum;
(function (Sktsc503ApplicationJsonErrorDescriptionEnum) {
    Sktsc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Sktsc503ApplicationJsonErrorDescriptionEnum = exports.Sktsc503ApplicationJsonErrorDescriptionEnum || (exports.Sktsc503ApplicationJsonErrorDescriptionEnum = {}));
var Sktsc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Sktsc503ApplicationJson, _super);
    function Sktsc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sktsc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sktsc503ApplicationJson.prototype, "errorDescription", void 0);
    return Sktsc503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sktsc503ApplicationJson = Sktsc503ApplicationJson;
var Sktsc504ApplicationJsonErrorEnum;
(function (Sktsc504ApplicationJsonErrorEnum) {
    Sktsc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Sktsc504ApplicationJsonErrorEnum = exports.Sktsc504ApplicationJsonErrorEnum || (exports.Sktsc504ApplicationJsonErrorEnum = {}));
var Sktsc504ApplicationJsonErrorDescriptionEnum;
(function (Sktsc504ApplicationJsonErrorDescriptionEnum) {
    Sktsc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Sktsc504ApplicationJsonErrorDescriptionEnum = exports.Sktsc504ApplicationJsonErrorDescriptionEnum || (exports.Sktsc504ApplicationJsonErrorDescriptionEnum = {}));
var Sktsc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Sktsc504ApplicationJson, _super);
    function Sktsc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Sktsc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Sktsc504ApplicationJson.prototype, "errorDescription", void 0);
    return Sktsc504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Sktsc504ApplicationJson = Sktsc504ApplicationJson;
var SktscRequest = /** @class */ (function (_super) {
    __extends(SktscRequest, _super);
    function SktscRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", SktscRequestBody)
    ], SktscRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SktscSecurity)
    ], SktscRequest.prototype, "security", void 0);
    return SktscRequest;
}(utils_1.SpeakeasyBase));
exports.SktscRequest = SktscRequest;
var SktscResponse = /** @class */ (function (_super) {
    __extends(SktscResponse, _super);
    function SktscResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SktscResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SktscResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sktsc400ApplicationJson)
    ], SktscResponse.prototype, "sktsc400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sktsc401ApplicationJson)
    ], SktscResponse.prototype, "sktsc401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sktsc404ApplicationJson)
    ], SktscResponse.prototype, "sktsc404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sktsc500ApplicationJson)
    ], SktscResponse.prototype, "sktsc500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sktsc502ApplicationJson)
    ], SktscResponse.prototype, "sktsc502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sktsc503ApplicationJson)
    ], SktscResponse.prototype, "sktsc503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Sktsc504ApplicationJson)
    ], SktscResponse.prototype, "sktsc504ApplicationJSONObject", void 0);
    return SktscResponse;
}(utils_1.SpeakeasyBase));
exports.SktscResponse = SktscResponse;
