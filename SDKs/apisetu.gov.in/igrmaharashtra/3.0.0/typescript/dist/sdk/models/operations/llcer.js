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
exports.LlcerResponse = exports.LlcerRequest = exports.Llcer504ApplicationJson = exports.Llcer504ApplicationJsonErrorDescriptionEnum = exports.Llcer504ApplicationJsonErrorEnum = exports.Llcer503ApplicationJson = exports.Llcer503ApplicationJsonErrorDescriptionEnum = exports.Llcer503ApplicationJsonErrorEnum = exports.Llcer502ApplicationJson = exports.Llcer502ApplicationJsonErrorDescriptionEnum = exports.Llcer502ApplicationJsonErrorEnum = exports.Llcer500ApplicationJson = exports.Llcer500ApplicationJsonErrorDescriptionEnum = exports.Llcer500ApplicationJsonErrorEnum = exports.Llcer404ApplicationJson = exports.Llcer404ApplicationJsonErrorDescriptionEnum = exports.Llcer404ApplicationJsonErrorEnum = exports.Llcer401ApplicationJson = exports.Llcer401ApplicationJsonErrorDescriptionEnum = exports.Llcer401ApplicationJsonErrorEnum = exports.Llcer400ApplicationJson = exports.Llcer400ApplicationJsonErrorDescriptionEnum = exports.Llcer400ApplicationJsonErrorEnum = exports.LlcerSecurity = exports.LlcerRequestBody = exports.LlcerRequestBodyFormatEnum = exports.LlcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var LlcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(LlcerRequestBodyCertificateParameters, _super);
    function LlcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], LlcerRequestBodyCertificateParameters.prototype, "udf1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UDF2" }),
        __metadata("design:type", String)
    ], LlcerRequestBodyCertificateParameters.prototype, "udf2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UDF3" }),
        __metadata("design:type", String)
    ], LlcerRequestBodyCertificateParameters.prototype, "udf3", void 0);
    return LlcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.LlcerRequestBodyCertificateParameters = LlcerRequestBodyCertificateParameters;
var LlcerRequestBodyFormatEnum;
(function (LlcerRequestBodyFormatEnum) {
    LlcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(LlcerRequestBodyFormatEnum = exports.LlcerRequestBodyFormatEnum || (exports.LlcerRequestBodyFormatEnum = {}));
var LlcerRequestBody = /** @class */ (function (_super) {
    __extends(LlcerRequestBody, _super);
    function LlcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", LlcerRequestBodyCertificateParameters)
    ], LlcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], LlcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], LlcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], LlcerRequestBody.prototype, "txnId", void 0);
    return LlcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.LlcerRequestBody = LlcerRequestBody;
var LlcerSecurity = /** @class */ (function (_super) {
    __extends(LlcerSecurity, _super);
    function LlcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], LlcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], LlcerSecurity.prototype, "clientId", void 0);
    return LlcerSecurity;
}(utils_1.SpeakeasyBase));
exports.LlcerSecurity = LlcerSecurity;
var Llcer400ApplicationJsonErrorEnum;
(function (Llcer400ApplicationJsonErrorEnum) {
    Llcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Llcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Llcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Llcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Llcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Llcer400ApplicationJsonErrorEnum = exports.Llcer400ApplicationJsonErrorEnum || (exports.Llcer400ApplicationJsonErrorEnum = {}));
var Llcer400ApplicationJsonErrorDescriptionEnum;
(function (Llcer400ApplicationJsonErrorDescriptionEnum) {
    Llcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Llcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Llcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Llcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Llcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Llcer400ApplicationJsonErrorDescriptionEnum = exports.Llcer400ApplicationJsonErrorDescriptionEnum || (exports.Llcer400ApplicationJsonErrorDescriptionEnum = {}));
var Llcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Llcer400ApplicationJson, _super);
    function Llcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Llcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Llcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Llcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Llcer400ApplicationJson = Llcer400ApplicationJson;
var Llcer401ApplicationJsonErrorEnum;
(function (Llcer401ApplicationJsonErrorEnum) {
    Llcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Llcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Llcer401ApplicationJsonErrorEnum = exports.Llcer401ApplicationJsonErrorEnum || (exports.Llcer401ApplicationJsonErrorEnum = {}));
var Llcer401ApplicationJsonErrorDescriptionEnum;
(function (Llcer401ApplicationJsonErrorDescriptionEnum) {
    Llcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Llcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Llcer401ApplicationJsonErrorDescriptionEnum = exports.Llcer401ApplicationJsonErrorDescriptionEnum || (exports.Llcer401ApplicationJsonErrorDescriptionEnum = {}));
var Llcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Llcer401ApplicationJson, _super);
    function Llcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Llcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Llcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Llcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Llcer401ApplicationJson = Llcer401ApplicationJson;
var Llcer404ApplicationJsonErrorEnum;
(function (Llcer404ApplicationJsonErrorEnum) {
    Llcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Llcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Llcer404ApplicationJsonErrorEnum = exports.Llcer404ApplicationJsonErrorEnum || (exports.Llcer404ApplicationJsonErrorEnum = {}));
var Llcer404ApplicationJsonErrorDescriptionEnum;
(function (Llcer404ApplicationJsonErrorDescriptionEnum) {
    Llcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Llcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Llcer404ApplicationJsonErrorDescriptionEnum = exports.Llcer404ApplicationJsonErrorDescriptionEnum || (exports.Llcer404ApplicationJsonErrorDescriptionEnum = {}));
var Llcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Llcer404ApplicationJson, _super);
    function Llcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Llcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Llcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Llcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Llcer404ApplicationJson = Llcer404ApplicationJson;
var Llcer500ApplicationJsonErrorEnum;
(function (Llcer500ApplicationJsonErrorEnum) {
    Llcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Llcer500ApplicationJsonErrorEnum = exports.Llcer500ApplicationJsonErrorEnum || (exports.Llcer500ApplicationJsonErrorEnum = {}));
var Llcer500ApplicationJsonErrorDescriptionEnum;
(function (Llcer500ApplicationJsonErrorDescriptionEnum) {
    Llcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Llcer500ApplicationJsonErrorDescriptionEnum = exports.Llcer500ApplicationJsonErrorDescriptionEnum || (exports.Llcer500ApplicationJsonErrorDescriptionEnum = {}));
var Llcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Llcer500ApplicationJson, _super);
    function Llcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Llcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Llcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Llcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Llcer500ApplicationJson = Llcer500ApplicationJson;
var Llcer502ApplicationJsonErrorEnum;
(function (Llcer502ApplicationJsonErrorEnum) {
    Llcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Llcer502ApplicationJsonErrorEnum = exports.Llcer502ApplicationJsonErrorEnum || (exports.Llcer502ApplicationJsonErrorEnum = {}));
var Llcer502ApplicationJsonErrorDescriptionEnum;
(function (Llcer502ApplicationJsonErrorDescriptionEnum) {
    Llcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Llcer502ApplicationJsonErrorDescriptionEnum = exports.Llcer502ApplicationJsonErrorDescriptionEnum || (exports.Llcer502ApplicationJsonErrorDescriptionEnum = {}));
var Llcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Llcer502ApplicationJson, _super);
    function Llcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Llcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Llcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Llcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Llcer502ApplicationJson = Llcer502ApplicationJson;
var Llcer503ApplicationJsonErrorEnum;
(function (Llcer503ApplicationJsonErrorEnum) {
    Llcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Llcer503ApplicationJsonErrorEnum = exports.Llcer503ApplicationJsonErrorEnum || (exports.Llcer503ApplicationJsonErrorEnum = {}));
var Llcer503ApplicationJsonErrorDescriptionEnum;
(function (Llcer503ApplicationJsonErrorDescriptionEnum) {
    Llcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Llcer503ApplicationJsonErrorDescriptionEnum = exports.Llcer503ApplicationJsonErrorDescriptionEnum || (exports.Llcer503ApplicationJsonErrorDescriptionEnum = {}));
var Llcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Llcer503ApplicationJson, _super);
    function Llcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Llcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Llcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Llcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Llcer503ApplicationJson = Llcer503ApplicationJson;
var Llcer504ApplicationJsonErrorEnum;
(function (Llcer504ApplicationJsonErrorEnum) {
    Llcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Llcer504ApplicationJsonErrorEnum = exports.Llcer504ApplicationJsonErrorEnum || (exports.Llcer504ApplicationJsonErrorEnum = {}));
var Llcer504ApplicationJsonErrorDescriptionEnum;
(function (Llcer504ApplicationJsonErrorDescriptionEnum) {
    Llcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Llcer504ApplicationJsonErrorDescriptionEnum = exports.Llcer504ApplicationJsonErrorDescriptionEnum || (exports.Llcer504ApplicationJsonErrorDescriptionEnum = {}));
var Llcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Llcer504ApplicationJson, _super);
    function Llcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Llcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Llcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Llcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Llcer504ApplicationJson = Llcer504ApplicationJson;
var LlcerRequest = /** @class */ (function (_super) {
    __extends(LlcerRequest, _super);
    function LlcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", LlcerRequestBody)
    ], LlcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LlcerSecurity)
    ], LlcerRequest.prototype, "security", void 0);
    return LlcerRequest;
}(utils_1.SpeakeasyBase));
exports.LlcerRequest = LlcerRequest;
var LlcerResponse = /** @class */ (function (_super) {
    __extends(LlcerResponse, _super);
    function LlcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], LlcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], LlcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Llcer400ApplicationJson)
    ], LlcerResponse.prototype, "llcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Llcer401ApplicationJson)
    ], LlcerResponse.prototype, "llcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Llcer404ApplicationJson)
    ], LlcerResponse.prototype, "llcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Llcer500ApplicationJson)
    ], LlcerResponse.prototype, "llcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Llcer502ApplicationJson)
    ], LlcerResponse.prototype, "llcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Llcer503ApplicationJson)
    ], LlcerResponse.prototype, "llcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Llcer504ApplicationJson)
    ], LlcerResponse.prototype, "llcer504ApplicationJSONObject", void 0);
    return LlcerResponse;
}(utils_1.SpeakeasyBase));
exports.LlcerResponse = LlcerResponse;
