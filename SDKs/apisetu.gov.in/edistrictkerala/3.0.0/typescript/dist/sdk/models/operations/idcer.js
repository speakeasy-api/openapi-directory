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
exports.IdcerResponse = exports.IdcerRequest = exports.Idcer504ApplicationJson = exports.Idcer504ApplicationJsonErrorDescriptionEnum = exports.Idcer504ApplicationJsonErrorEnum = exports.Idcer503ApplicationJson = exports.Idcer503ApplicationJsonErrorDescriptionEnum = exports.Idcer503ApplicationJsonErrorEnum = exports.Idcer502ApplicationJson = exports.Idcer502ApplicationJsonErrorDescriptionEnum = exports.Idcer502ApplicationJsonErrorEnum = exports.Idcer500ApplicationJson = exports.Idcer500ApplicationJsonErrorDescriptionEnum = exports.Idcer500ApplicationJsonErrorEnum = exports.Idcer404ApplicationJson = exports.Idcer404ApplicationJsonErrorDescriptionEnum = exports.Idcer404ApplicationJsonErrorEnum = exports.Idcer401ApplicationJson = exports.Idcer401ApplicationJsonErrorDescriptionEnum = exports.Idcer401ApplicationJsonErrorEnum = exports.Idcer400ApplicationJson = exports.Idcer400ApplicationJsonErrorDescriptionEnum = exports.Idcer400ApplicationJsonErrorEnum = exports.IdcerSecurity = exports.IdcerRequestBody = exports.IdcerRequestBodyFormatEnum = exports.IdcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var IdcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(IdcerRequestBodyCertificateParameters, _super);
    function IdcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], IdcerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], IdcerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], IdcerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return IdcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.IdcerRequestBodyCertificateParameters = IdcerRequestBodyCertificateParameters;
var IdcerRequestBodyFormatEnum;
(function (IdcerRequestBodyFormatEnum) {
    IdcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(IdcerRequestBodyFormatEnum = exports.IdcerRequestBodyFormatEnum || (exports.IdcerRequestBodyFormatEnum = {}));
var IdcerRequestBody = /** @class */ (function (_super) {
    __extends(IdcerRequestBody, _super);
    function IdcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", IdcerRequestBodyCertificateParameters)
    ], IdcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], IdcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], IdcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], IdcerRequestBody.prototype, "txnId", void 0);
    return IdcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.IdcerRequestBody = IdcerRequestBody;
var IdcerSecurity = /** @class */ (function (_super) {
    __extends(IdcerSecurity, _super);
    function IdcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], IdcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], IdcerSecurity.prototype, "clientId", void 0);
    return IdcerSecurity;
}(utils_1.SpeakeasyBase));
exports.IdcerSecurity = IdcerSecurity;
var Idcer400ApplicationJsonErrorEnum;
(function (Idcer400ApplicationJsonErrorEnum) {
    Idcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Idcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Idcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Idcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Idcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Idcer400ApplicationJsonErrorEnum = exports.Idcer400ApplicationJsonErrorEnum || (exports.Idcer400ApplicationJsonErrorEnum = {}));
var Idcer400ApplicationJsonErrorDescriptionEnum;
(function (Idcer400ApplicationJsonErrorDescriptionEnum) {
    Idcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Idcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Idcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Idcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Idcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Idcer400ApplicationJsonErrorDescriptionEnum = exports.Idcer400ApplicationJsonErrorDescriptionEnum || (exports.Idcer400ApplicationJsonErrorDescriptionEnum = {}));
var Idcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Idcer400ApplicationJson, _super);
    function Idcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Idcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Idcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Idcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Idcer400ApplicationJson = Idcer400ApplicationJson;
var Idcer401ApplicationJsonErrorEnum;
(function (Idcer401ApplicationJsonErrorEnum) {
    Idcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Idcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Idcer401ApplicationJsonErrorEnum = exports.Idcer401ApplicationJsonErrorEnum || (exports.Idcer401ApplicationJsonErrorEnum = {}));
var Idcer401ApplicationJsonErrorDescriptionEnum;
(function (Idcer401ApplicationJsonErrorDescriptionEnum) {
    Idcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Idcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Idcer401ApplicationJsonErrorDescriptionEnum = exports.Idcer401ApplicationJsonErrorDescriptionEnum || (exports.Idcer401ApplicationJsonErrorDescriptionEnum = {}));
var Idcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Idcer401ApplicationJson, _super);
    function Idcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Idcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Idcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Idcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Idcer401ApplicationJson = Idcer401ApplicationJson;
var Idcer404ApplicationJsonErrorEnum;
(function (Idcer404ApplicationJsonErrorEnum) {
    Idcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Idcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Idcer404ApplicationJsonErrorEnum = exports.Idcer404ApplicationJsonErrorEnum || (exports.Idcer404ApplicationJsonErrorEnum = {}));
var Idcer404ApplicationJsonErrorDescriptionEnum;
(function (Idcer404ApplicationJsonErrorDescriptionEnum) {
    Idcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Idcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Idcer404ApplicationJsonErrorDescriptionEnum = exports.Idcer404ApplicationJsonErrorDescriptionEnum || (exports.Idcer404ApplicationJsonErrorDescriptionEnum = {}));
var Idcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Idcer404ApplicationJson, _super);
    function Idcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Idcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Idcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Idcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Idcer404ApplicationJson = Idcer404ApplicationJson;
var Idcer500ApplicationJsonErrorEnum;
(function (Idcer500ApplicationJsonErrorEnum) {
    Idcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Idcer500ApplicationJsonErrorEnum = exports.Idcer500ApplicationJsonErrorEnum || (exports.Idcer500ApplicationJsonErrorEnum = {}));
var Idcer500ApplicationJsonErrorDescriptionEnum;
(function (Idcer500ApplicationJsonErrorDescriptionEnum) {
    Idcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Idcer500ApplicationJsonErrorDescriptionEnum = exports.Idcer500ApplicationJsonErrorDescriptionEnum || (exports.Idcer500ApplicationJsonErrorDescriptionEnum = {}));
var Idcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Idcer500ApplicationJson, _super);
    function Idcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Idcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Idcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Idcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Idcer500ApplicationJson = Idcer500ApplicationJson;
var Idcer502ApplicationJsonErrorEnum;
(function (Idcer502ApplicationJsonErrorEnum) {
    Idcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Idcer502ApplicationJsonErrorEnum = exports.Idcer502ApplicationJsonErrorEnum || (exports.Idcer502ApplicationJsonErrorEnum = {}));
var Idcer502ApplicationJsonErrorDescriptionEnum;
(function (Idcer502ApplicationJsonErrorDescriptionEnum) {
    Idcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Idcer502ApplicationJsonErrorDescriptionEnum = exports.Idcer502ApplicationJsonErrorDescriptionEnum || (exports.Idcer502ApplicationJsonErrorDescriptionEnum = {}));
var Idcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Idcer502ApplicationJson, _super);
    function Idcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Idcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Idcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Idcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Idcer502ApplicationJson = Idcer502ApplicationJson;
var Idcer503ApplicationJsonErrorEnum;
(function (Idcer503ApplicationJsonErrorEnum) {
    Idcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Idcer503ApplicationJsonErrorEnum = exports.Idcer503ApplicationJsonErrorEnum || (exports.Idcer503ApplicationJsonErrorEnum = {}));
var Idcer503ApplicationJsonErrorDescriptionEnum;
(function (Idcer503ApplicationJsonErrorDescriptionEnum) {
    Idcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Idcer503ApplicationJsonErrorDescriptionEnum = exports.Idcer503ApplicationJsonErrorDescriptionEnum || (exports.Idcer503ApplicationJsonErrorDescriptionEnum = {}));
var Idcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Idcer503ApplicationJson, _super);
    function Idcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Idcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Idcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Idcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Idcer503ApplicationJson = Idcer503ApplicationJson;
var Idcer504ApplicationJsonErrorEnum;
(function (Idcer504ApplicationJsonErrorEnum) {
    Idcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Idcer504ApplicationJsonErrorEnum = exports.Idcer504ApplicationJsonErrorEnum || (exports.Idcer504ApplicationJsonErrorEnum = {}));
var Idcer504ApplicationJsonErrorDescriptionEnum;
(function (Idcer504ApplicationJsonErrorDescriptionEnum) {
    Idcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Idcer504ApplicationJsonErrorDescriptionEnum = exports.Idcer504ApplicationJsonErrorDescriptionEnum || (exports.Idcer504ApplicationJsonErrorDescriptionEnum = {}));
var Idcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Idcer504ApplicationJson, _super);
    function Idcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Idcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Idcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Idcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Idcer504ApplicationJson = Idcer504ApplicationJson;
var IdcerRequest = /** @class */ (function (_super) {
    __extends(IdcerRequest, _super);
    function IdcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", IdcerRequestBody)
    ], IdcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", IdcerSecurity)
    ], IdcerRequest.prototype, "security", void 0);
    return IdcerRequest;
}(utils_1.SpeakeasyBase));
exports.IdcerRequest = IdcerRequest;
var IdcerResponse = /** @class */ (function (_super) {
    __extends(IdcerResponse, _super);
    function IdcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], IdcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], IdcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Idcer400ApplicationJson)
    ], IdcerResponse.prototype, "idcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Idcer401ApplicationJson)
    ], IdcerResponse.prototype, "idcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Idcer404ApplicationJson)
    ], IdcerResponse.prototype, "idcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Idcer500ApplicationJson)
    ], IdcerResponse.prototype, "idcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Idcer502ApplicationJson)
    ], IdcerResponse.prototype, "idcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Idcer503ApplicationJson)
    ], IdcerResponse.prototype, "idcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Idcer504ApplicationJson)
    ], IdcerResponse.prototype, "idcer504ApplicationJSONObject", void 0);
    return IdcerResponse;
}(utils_1.SpeakeasyBase));
exports.IdcerResponse = IdcerResponse;
