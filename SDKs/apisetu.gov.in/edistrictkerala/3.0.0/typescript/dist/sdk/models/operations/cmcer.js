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
exports.CmcerResponse = exports.CmcerRequest = exports.Cmcer504ApplicationJson = exports.Cmcer504ApplicationJsonErrorDescriptionEnum = exports.Cmcer504ApplicationJsonErrorEnum = exports.Cmcer503ApplicationJson = exports.Cmcer503ApplicationJsonErrorDescriptionEnum = exports.Cmcer503ApplicationJsonErrorEnum = exports.Cmcer502ApplicationJson = exports.Cmcer502ApplicationJsonErrorDescriptionEnum = exports.Cmcer502ApplicationJsonErrorEnum = exports.Cmcer500ApplicationJson = exports.Cmcer500ApplicationJsonErrorDescriptionEnum = exports.Cmcer500ApplicationJsonErrorEnum = exports.Cmcer404ApplicationJson = exports.Cmcer404ApplicationJsonErrorDescriptionEnum = exports.Cmcer404ApplicationJsonErrorEnum = exports.Cmcer401ApplicationJson = exports.Cmcer401ApplicationJsonErrorDescriptionEnum = exports.Cmcer401ApplicationJsonErrorEnum = exports.Cmcer400ApplicationJson = exports.Cmcer400ApplicationJsonErrorDescriptionEnum = exports.Cmcer400ApplicationJsonErrorEnum = exports.CmcerSecurity = exports.CmcerRequestBody = exports.CmcerRequestBodyFormatEnum = exports.CmcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CmcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(CmcerRequestBodyCertificateParameters, _super);
    function CmcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], CmcerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], CmcerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], CmcerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return CmcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.CmcerRequestBodyCertificateParameters = CmcerRequestBodyCertificateParameters;
var CmcerRequestBodyFormatEnum;
(function (CmcerRequestBodyFormatEnum) {
    CmcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(CmcerRequestBodyFormatEnum = exports.CmcerRequestBodyFormatEnum || (exports.CmcerRequestBodyFormatEnum = {}));
var CmcerRequestBody = /** @class */ (function (_super) {
    __extends(CmcerRequestBody, _super);
    function CmcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", CmcerRequestBodyCertificateParameters)
    ], CmcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], CmcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], CmcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], CmcerRequestBody.prototype, "txnId", void 0);
    return CmcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.CmcerRequestBody = CmcerRequestBody;
var CmcerSecurity = /** @class */ (function (_super) {
    __extends(CmcerSecurity, _super);
    function CmcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], CmcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], CmcerSecurity.prototype, "clientId", void 0);
    return CmcerSecurity;
}(utils_1.SpeakeasyBase));
exports.CmcerSecurity = CmcerSecurity;
var Cmcer400ApplicationJsonErrorEnum;
(function (Cmcer400ApplicationJsonErrorEnum) {
    Cmcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Cmcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Cmcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Cmcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Cmcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Cmcer400ApplicationJsonErrorEnum = exports.Cmcer400ApplicationJsonErrorEnum || (exports.Cmcer400ApplicationJsonErrorEnum = {}));
var Cmcer400ApplicationJsonErrorDescriptionEnum;
(function (Cmcer400ApplicationJsonErrorDescriptionEnum) {
    Cmcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Cmcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Cmcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Cmcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Cmcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Cmcer400ApplicationJsonErrorDescriptionEnum = exports.Cmcer400ApplicationJsonErrorDescriptionEnum || (exports.Cmcer400ApplicationJsonErrorDescriptionEnum = {}));
var Cmcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Cmcer400ApplicationJson, _super);
    function Cmcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cmcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cmcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Cmcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cmcer400ApplicationJson = Cmcer400ApplicationJson;
var Cmcer401ApplicationJsonErrorEnum;
(function (Cmcer401ApplicationJsonErrorEnum) {
    Cmcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Cmcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Cmcer401ApplicationJsonErrorEnum = exports.Cmcer401ApplicationJsonErrorEnum || (exports.Cmcer401ApplicationJsonErrorEnum = {}));
var Cmcer401ApplicationJsonErrorDescriptionEnum;
(function (Cmcer401ApplicationJsonErrorDescriptionEnum) {
    Cmcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Cmcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Cmcer401ApplicationJsonErrorDescriptionEnum = exports.Cmcer401ApplicationJsonErrorDescriptionEnum || (exports.Cmcer401ApplicationJsonErrorDescriptionEnum = {}));
var Cmcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Cmcer401ApplicationJson, _super);
    function Cmcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cmcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cmcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Cmcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cmcer401ApplicationJson = Cmcer401ApplicationJson;
var Cmcer404ApplicationJsonErrorEnum;
(function (Cmcer404ApplicationJsonErrorEnum) {
    Cmcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Cmcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Cmcer404ApplicationJsonErrorEnum = exports.Cmcer404ApplicationJsonErrorEnum || (exports.Cmcer404ApplicationJsonErrorEnum = {}));
var Cmcer404ApplicationJsonErrorDescriptionEnum;
(function (Cmcer404ApplicationJsonErrorDescriptionEnum) {
    Cmcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Cmcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Cmcer404ApplicationJsonErrorDescriptionEnum = exports.Cmcer404ApplicationJsonErrorDescriptionEnum || (exports.Cmcer404ApplicationJsonErrorDescriptionEnum = {}));
var Cmcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Cmcer404ApplicationJson, _super);
    function Cmcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cmcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cmcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Cmcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cmcer404ApplicationJson = Cmcer404ApplicationJson;
var Cmcer500ApplicationJsonErrorEnum;
(function (Cmcer500ApplicationJsonErrorEnum) {
    Cmcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Cmcer500ApplicationJsonErrorEnum = exports.Cmcer500ApplicationJsonErrorEnum || (exports.Cmcer500ApplicationJsonErrorEnum = {}));
var Cmcer500ApplicationJsonErrorDescriptionEnum;
(function (Cmcer500ApplicationJsonErrorDescriptionEnum) {
    Cmcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Cmcer500ApplicationJsonErrorDescriptionEnum = exports.Cmcer500ApplicationJsonErrorDescriptionEnum || (exports.Cmcer500ApplicationJsonErrorDescriptionEnum = {}));
var Cmcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Cmcer500ApplicationJson, _super);
    function Cmcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cmcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cmcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Cmcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cmcer500ApplicationJson = Cmcer500ApplicationJson;
var Cmcer502ApplicationJsonErrorEnum;
(function (Cmcer502ApplicationJsonErrorEnum) {
    Cmcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Cmcer502ApplicationJsonErrorEnum = exports.Cmcer502ApplicationJsonErrorEnum || (exports.Cmcer502ApplicationJsonErrorEnum = {}));
var Cmcer502ApplicationJsonErrorDescriptionEnum;
(function (Cmcer502ApplicationJsonErrorDescriptionEnum) {
    Cmcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Cmcer502ApplicationJsonErrorDescriptionEnum = exports.Cmcer502ApplicationJsonErrorDescriptionEnum || (exports.Cmcer502ApplicationJsonErrorDescriptionEnum = {}));
var Cmcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Cmcer502ApplicationJson, _super);
    function Cmcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cmcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cmcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Cmcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cmcer502ApplicationJson = Cmcer502ApplicationJson;
var Cmcer503ApplicationJsonErrorEnum;
(function (Cmcer503ApplicationJsonErrorEnum) {
    Cmcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Cmcer503ApplicationJsonErrorEnum = exports.Cmcer503ApplicationJsonErrorEnum || (exports.Cmcer503ApplicationJsonErrorEnum = {}));
var Cmcer503ApplicationJsonErrorDescriptionEnum;
(function (Cmcer503ApplicationJsonErrorDescriptionEnum) {
    Cmcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Cmcer503ApplicationJsonErrorDescriptionEnum = exports.Cmcer503ApplicationJsonErrorDescriptionEnum || (exports.Cmcer503ApplicationJsonErrorDescriptionEnum = {}));
var Cmcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Cmcer503ApplicationJson, _super);
    function Cmcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cmcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cmcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Cmcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cmcer503ApplicationJson = Cmcer503ApplicationJson;
var Cmcer504ApplicationJsonErrorEnum;
(function (Cmcer504ApplicationJsonErrorEnum) {
    Cmcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Cmcer504ApplicationJsonErrorEnum = exports.Cmcer504ApplicationJsonErrorEnum || (exports.Cmcer504ApplicationJsonErrorEnum = {}));
var Cmcer504ApplicationJsonErrorDescriptionEnum;
(function (Cmcer504ApplicationJsonErrorDescriptionEnum) {
    Cmcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Cmcer504ApplicationJsonErrorDescriptionEnum = exports.Cmcer504ApplicationJsonErrorDescriptionEnum || (exports.Cmcer504ApplicationJsonErrorDescriptionEnum = {}));
var Cmcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Cmcer504ApplicationJson, _super);
    function Cmcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cmcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cmcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Cmcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cmcer504ApplicationJson = Cmcer504ApplicationJson;
var CmcerRequest = /** @class */ (function (_super) {
    __extends(CmcerRequest, _super);
    function CmcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CmcerRequestBody)
    ], CmcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CmcerSecurity)
    ], CmcerRequest.prototype, "security", void 0);
    return CmcerRequest;
}(utils_1.SpeakeasyBase));
exports.CmcerRequest = CmcerRequest;
var CmcerResponse = /** @class */ (function (_super) {
    __extends(CmcerResponse, _super);
    function CmcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CmcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CmcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cmcer400ApplicationJson)
    ], CmcerResponse.prototype, "cmcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cmcer401ApplicationJson)
    ], CmcerResponse.prototype, "cmcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cmcer404ApplicationJson)
    ], CmcerResponse.prototype, "cmcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cmcer500ApplicationJson)
    ], CmcerResponse.prototype, "cmcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cmcer502ApplicationJson)
    ], CmcerResponse.prototype, "cmcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cmcer503ApplicationJson)
    ], CmcerResponse.prototype, "cmcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cmcer504ApplicationJson)
    ], CmcerResponse.prototype, "cmcer504ApplicationJSONObject", void 0);
    return CmcerResponse;
}(utils_1.SpeakeasyBase));
exports.CmcerResponse = CmcerResponse;
