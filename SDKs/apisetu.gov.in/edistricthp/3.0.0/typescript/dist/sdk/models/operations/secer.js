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
exports.SecerResponse = exports.SecerRequest = exports.Secer504ApplicationJson = exports.Secer504ApplicationJsonErrorDescriptionEnum = exports.Secer504ApplicationJsonErrorEnum = exports.Secer503ApplicationJson = exports.Secer503ApplicationJsonErrorDescriptionEnum = exports.Secer503ApplicationJsonErrorEnum = exports.Secer502ApplicationJson = exports.Secer502ApplicationJsonErrorDescriptionEnum = exports.Secer502ApplicationJsonErrorEnum = exports.Secer500ApplicationJson = exports.Secer500ApplicationJsonErrorDescriptionEnum = exports.Secer500ApplicationJsonErrorEnum = exports.Secer404ApplicationJson = exports.Secer404ApplicationJsonErrorDescriptionEnum = exports.Secer404ApplicationJsonErrorEnum = exports.Secer401ApplicationJson = exports.Secer401ApplicationJsonErrorDescriptionEnum = exports.Secer401ApplicationJsonErrorEnum = exports.Secer400ApplicationJson = exports.Secer400ApplicationJsonErrorDescriptionEnum = exports.Secer400ApplicationJsonErrorEnum = exports.SecerSecurity = exports.SecerRequestBody = exports.SecerRequestBodyFormatEnum = exports.SecerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SecerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(SecerRequestBodyCertificateParameters, _super);
    function SecerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], SecerRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return SecerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.SecerRequestBodyCertificateParameters = SecerRequestBodyCertificateParameters;
var SecerRequestBodyFormatEnum;
(function (SecerRequestBodyFormatEnum) {
    SecerRequestBodyFormatEnum["Pdf"] = "pdf";
})(SecerRequestBodyFormatEnum = exports.SecerRequestBodyFormatEnum || (exports.SecerRequestBodyFormatEnum = {}));
var SecerRequestBody = /** @class */ (function (_super) {
    __extends(SecerRequestBody, _super);
    function SecerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", SecerRequestBodyCertificateParameters)
    ], SecerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], SecerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SecerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], SecerRequestBody.prototype, "txnId", void 0);
    return SecerRequestBody;
}(utils_1.SpeakeasyBase));
exports.SecerRequestBody = SecerRequestBody;
var SecerSecurity = /** @class */ (function (_super) {
    __extends(SecerSecurity, _super);
    function SecerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SecerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], SecerSecurity.prototype, "clientId", void 0);
    return SecerSecurity;
}(utils_1.SpeakeasyBase));
exports.SecerSecurity = SecerSecurity;
var Secer400ApplicationJsonErrorEnum;
(function (Secer400ApplicationJsonErrorEnum) {
    Secer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Secer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Secer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Secer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Secer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Secer400ApplicationJsonErrorEnum = exports.Secer400ApplicationJsonErrorEnum || (exports.Secer400ApplicationJsonErrorEnum = {}));
var Secer400ApplicationJsonErrorDescriptionEnum;
(function (Secer400ApplicationJsonErrorDescriptionEnum) {
    Secer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Secer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Secer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Secer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Secer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Secer400ApplicationJsonErrorDescriptionEnum = exports.Secer400ApplicationJsonErrorDescriptionEnum || (exports.Secer400ApplicationJsonErrorDescriptionEnum = {}));
var Secer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Secer400ApplicationJson, _super);
    function Secer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Secer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Secer400ApplicationJson.prototype, "errorDescription", void 0);
    return Secer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Secer400ApplicationJson = Secer400ApplicationJson;
var Secer401ApplicationJsonErrorEnum;
(function (Secer401ApplicationJsonErrorEnum) {
    Secer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Secer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Secer401ApplicationJsonErrorEnum = exports.Secer401ApplicationJsonErrorEnum || (exports.Secer401ApplicationJsonErrorEnum = {}));
var Secer401ApplicationJsonErrorDescriptionEnum;
(function (Secer401ApplicationJsonErrorDescriptionEnum) {
    Secer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Secer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Secer401ApplicationJsonErrorDescriptionEnum = exports.Secer401ApplicationJsonErrorDescriptionEnum || (exports.Secer401ApplicationJsonErrorDescriptionEnum = {}));
var Secer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Secer401ApplicationJson, _super);
    function Secer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Secer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Secer401ApplicationJson.prototype, "errorDescription", void 0);
    return Secer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Secer401ApplicationJson = Secer401ApplicationJson;
var Secer404ApplicationJsonErrorEnum;
(function (Secer404ApplicationJsonErrorEnum) {
    Secer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Secer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Secer404ApplicationJsonErrorEnum = exports.Secer404ApplicationJsonErrorEnum || (exports.Secer404ApplicationJsonErrorEnum = {}));
var Secer404ApplicationJsonErrorDescriptionEnum;
(function (Secer404ApplicationJsonErrorDescriptionEnum) {
    Secer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Secer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Secer404ApplicationJsonErrorDescriptionEnum = exports.Secer404ApplicationJsonErrorDescriptionEnum || (exports.Secer404ApplicationJsonErrorDescriptionEnum = {}));
var Secer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Secer404ApplicationJson, _super);
    function Secer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Secer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Secer404ApplicationJson.prototype, "errorDescription", void 0);
    return Secer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Secer404ApplicationJson = Secer404ApplicationJson;
var Secer500ApplicationJsonErrorEnum;
(function (Secer500ApplicationJsonErrorEnum) {
    Secer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Secer500ApplicationJsonErrorEnum = exports.Secer500ApplicationJsonErrorEnum || (exports.Secer500ApplicationJsonErrorEnum = {}));
var Secer500ApplicationJsonErrorDescriptionEnum;
(function (Secer500ApplicationJsonErrorDescriptionEnum) {
    Secer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Secer500ApplicationJsonErrorDescriptionEnum = exports.Secer500ApplicationJsonErrorDescriptionEnum || (exports.Secer500ApplicationJsonErrorDescriptionEnum = {}));
var Secer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Secer500ApplicationJson, _super);
    function Secer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Secer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Secer500ApplicationJson.prototype, "errorDescription", void 0);
    return Secer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Secer500ApplicationJson = Secer500ApplicationJson;
var Secer502ApplicationJsonErrorEnum;
(function (Secer502ApplicationJsonErrorEnum) {
    Secer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Secer502ApplicationJsonErrorEnum = exports.Secer502ApplicationJsonErrorEnum || (exports.Secer502ApplicationJsonErrorEnum = {}));
var Secer502ApplicationJsonErrorDescriptionEnum;
(function (Secer502ApplicationJsonErrorDescriptionEnum) {
    Secer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Secer502ApplicationJsonErrorDescriptionEnum = exports.Secer502ApplicationJsonErrorDescriptionEnum || (exports.Secer502ApplicationJsonErrorDescriptionEnum = {}));
var Secer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Secer502ApplicationJson, _super);
    function Secer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Secer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Secer502ApplicationJson.prototype, "errorDescription", void 0);
    return Secer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Secer502ApplicationJson = Secer502ApplicationJson;
var Secer503ApplicationJsonErrorEnum;
(function (Secer503ApplicationJsonErrorEnum) {
    Secer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Secer503ApplicationJsonErrorEnum = exports.Secer503ApplicationJsonErrorEnum || (exports.Secer503ApplicationJsonErrorEnum = {}));
var Secer503ApplicationJsonErrorDescriptionEnum;
(function (Secer503ApplicationJsonErrorDescriptionEnum) {
    Secer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Secer503ApplicationJsonErrorDescriptionEnum = exports.Secer503ApplicationJsonErrorDescriptionEnum || (exports.Secer503ApplicationJsonErrorDescriptionEnum = {}));
var Secer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Secer503ApplicationJson, _super);
    function Secer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Secer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Secer503ApplicationJson.prototype, "errorDescription", void 0);
    return Secer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Secer503ApplicationJson = Secer503ApplicationJson;
var Secer504ApplicationJsonErrorEnum;
(function (Secer504ApplicationJsonErrorEnum) {
    Secer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Secer504ApplicationJsonErrorEnum = exports.Secer504ApplicationJsonErrorEnum || (exports.Secer504ApplicationJsonErrorEnum = {}));
var Secer504ApplicationJsonErrorDescriptionEnum;
(function (Secer504ApplicationJsonErrorDescriptionEnum) {
    Secer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Secer504ApplicationJsonErrorDescriptionEnum = exports.Secer504ApplicationJsonErrorDescriptionEnum || (exports.Secer504ApplicationJsonErrorDescriptionEnum = {}));
var Secer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Secer504ApplicationJson, _super);
    function Secer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Secer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Secer504ApplicationJson.prototype, "errorDescription", void 0);
    return Secer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Secer504ApplicationJson = Secer504ApplicationJson;
var SecerRequest = /** @class */ (function (_super) {
    __extends(SecerRequest, _super);
    function SecerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", SecerRequestBody)
    ], SecerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SecerSecurity)
    ], SecerRequest.prototype, "security", void 0);
    return SecerRequest;
}(utils_1.SpeakeasyBase));
exports.SecerRequest = SecerRequest;
var SecerResponse = /** @class */ (function (_super) {
    __extends(SecerResponse, _super);
    function SecerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SecerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SecerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Secer400ApplicationJson)
    ], SecerResponse.prototype, "secer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Secer401ApplicationJson)
    ], SecerResponse.prototype, "secer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Secer404ApplicationJson)
    ], SecerResponse.prototype, "secer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Secer500ApplicationJson)
    ], SecerResponse.prototype, "secer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Secer502ApplicationJson)
    ], SecerResponse.prototype, "secer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Secer503ApplicationJson)
    ], SecerResponse.prototype, "secer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Secer504ApplicationJson)
    ], SecerResponse.prototype, "secer504ApplicationJSONObject", void 0);
    return SecerResponse;
}(utils_1.SpeakeasyBase));
exports.SecerResponse = SecerResponse;
