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
exports.LicerResponse = exports.LicerRequest = exports.Licer504ApplicationJson = exports.Licer504ApplicationJsonErrorDescriptionEnum = exports.Licer504ApplicationJsonErrorEnum = exports.Licer503ApplicationJson = exports.Licer503ApplicationJsonErrorDescriptionEnum = exports.Licer503ApplicationJsonErrorEnum = exports.Licer502ApplicationJson = exports.Licer502ApplicationJsonErrorDescriptionEnum = exports.Licer502ApplicationJsonErrorEnum = exports.Licer500ApplicationJson = exports.Licer500ApplicationJsonErrorDescriptionEnum = exports.Licer500ApplicationJsonErrorEnum = exports.Licer404ApplicationJson = exports.Licer404ApplicationJsonErrorDescriptionEnum = exports.Licer404ApplicationJsonErrorEnum = exports.Licer401ApplicationJson = exports.Licer401ApplicationJsonErrorDescriptionEnum = exports.Licer401ApplicationJsonErrorEnum = exports.Licer400ApplicationJson = exports.Licer400ApplicationJsonErrorDescriptionEnum = exports.Licer400ApplicationJsonErrorEnum = exports.LicerSecurity = exports.LicerRequestBody = exports.LicerRequestBodyFormatEnum = exports.LicerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var LicerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(LicerRequestBodyCertificateParameters, _super);
    function LicerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], LicerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], LicerRequestBodyCertificateParameters.prototype, "udf1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UDF2" }),
        __metadata("design:type", String)
    ], LicerRequestBodyCertificateParameters.prototype, "udf2", void 0);
    return LicerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.LicerRequestBodyCertificateParameters = LicerRequestBodyCertificateParameters;
var LicerRequestBodyFormatEnum;
(function (LicerRequestBodyFormatEnum) {
    LicerRequestBodyFormatEnum["Pdf"] = "pdf";
})(LicerRequestBodyFormatEnum = exports.LicerRequestBodyFormatEnum || (exports.LicerRequestBodyFormatEnum = {}));
var LicerRequestBody = /** @class */ (function (_super) {
    __extends(LicerRequestBody, _super);
    function LicerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", LicerRequestBodyCertificateParameters)
    ], LicerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], LicerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], LicerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], LicerRequestBody.prototype, "txnId", void 0);
    return LicerRequestBody;
}(utils_1.SpeakeasyBase));
exports.LicerRequestBody = LicerRequestBody;
var LicerSecurity = /** @class */ (function (_super) {
    __extends(LicerSecurity, _super);
    function LicerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], LicerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], LicerSecurity.prototype, "clientId", void 0);
    return LicerSecurity;
}(utils_1.SpeakeasyBase));
exports.LicerSecurity = LicerSecurity;
var Licer400ApplicationJsonErrorEnum;
(function (Licer400ApplicationJsonErrorEnum) {
    Licer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Licer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Licer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Licer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Licer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Licer400ApplicationJsonErrorEnum = exports.Licer400ApplicationJsonErrorEnum || (exports.Licer400ApplicationJsonErrorEnum = {}));
var Licer400ApplicationJsonErrorDescriptionEnum;
(function (Licer400ApplicationJsonErrorDescriptionEnum) {
    Licer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Licer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Licer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Licer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Licer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Licer400ApplicationJsonErrorDescriptionEnum = exports.Licer400ApplicationJsonErrorDescriptionEnum || (exports.Licer400ApplicationJsonErrorDescriptionEnum = {}));
var Licer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Licer400ApplicationJson, _super);
    function Licer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Licer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Licer400ApplicationJson.prototype, "errorDescription", void 0);
    return Licer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Licer400ApplicationJson = Licer400ApplicationJson;
var Licer401ApplicationJsonErrorEnum;
(function (Licer401ApplicationJsonErrorEnum) {
    Licer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Licer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Licer401ApplicationJsonErrorEnum = exports.Licer401ApplicationJsonErrorEnum || (exports.Licer401ApplicationJsonErrorEnum = {}));
var Licer401ApplicationJsonErrorDescriptionEnum;
(function (Licer401ApplicationJsonErrorDescriptionEnum) {
    Licer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Licer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Licer401ApplicationJsonErrorDescriptionEnum = exports.Licer401ApplicationJsonErrorDescriptionEnum || (exports.Licer401ApplicationJsonErrorDescriptionEnum = {}));
var Licer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Licer401ApplicationJson, _super);
    function Licer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Licer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Licer401ApplicationJson.prototype, "errorDescription", void 0);
    return Licer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Licer401ApplicationJson = Licer401ApplicationJson;
var Licer404ApplicationJsonErrorEnum;
(function (Licer404ApplicationJsonErrorEnum) {
    Licer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Licer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Licer404ApplicationJsonErrorEnum = exports.Licer404ApplicationJsonErrorEnum || (exports.Licer404ApplicationJsonErrorEnum = {}));
var Licer404ApplicationJsonErrorDescriptionEnum;
(function (Licer404ApplicationJsonErrorDescriptionEnum) {
    Licer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Licer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Licer404ApplicationJsonErrorDescriptionEnum = exports.Licer404ApplicationJsonErrorDescriptionEnum || (exports.Licer404ApplicationJsonErrorDescriptionEnum = {}));
var Licer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Licer404ApplicationJson, _super);
    function Licer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Licer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Licer404ApplicationJson.prototype, "errorDescription", void 0);
    return Licer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Licer404ApplicationJson = Licer404ApplicationJson;
var Licer500ApplicationJsonErrorEnum;
(function (Licer500ApplicationJsonErrorEnum) {
    Licer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Licer500ApplicationJsonErrorEnum = exports.Licer500ApplicationJsonErrorEnum || (exports.Licer500ApplicationJsonErrorEnum = {}));
var Licer500ApplicationJsonErrorDescriptionEnum;
(function (Licer500ApplicationJsonErrorDescriptionEnum) {
    Licer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Licer500ApplicationJsonErrorDescriptionEnum = exports.Licer500ApplicationJsonErrorDescriptionEnum || (exports.Licer500ApplicationJsonErrorDescriptionEnum = {}));
var Licer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Licer500ApplicationJson, _super);
    function Licer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Licer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Licer500ApplicationJson.prototype, "errorDescription", void 0);
    return Licer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Licer500ApplicationJson = Licer500ApplicationJson;
var Licer502ApplicationJsonErrorEnum;
(function (Licer502ApplicationJsonErrorEnum) {
    Licer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Licer502ApplicationJsonErrorEnum = exports.Licer502ApplicationJsonErrorEnum || (exports.Licer502ApplicationJsonErrorEnum = {}));
var Licer502ApplicationJsonErrorDescriptionEnum;
(function (Licer502ApplicationJsonErrorDescriptionEnum) {
    Licer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Licer502ApplicationJsonErrorDescriptionEnum = exports.Licer502ApplicationJsonErrorDescriptionEnum || (exports.Licer502ApplicationJsonErrorDescriptionEnum = {}));
var Licer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Licer502ApplicationJson, _super);
    function Licer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Licer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Licer502ApplicationJson.prototype, "errorDescription", void 0);
    return Licer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Licer502ApplicationJson = Licer502ApplicationJson;
var Licer503ApplicationJsonErrorEnum;
(function (Licer503ApplicationJsonErrorEnum) {
    Licer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Licer503ApplicationJsonErrorEnum = exports.Licer503ApplicationJsonErrorEnum || (exports.Licer503ApplicationJsonErrorEnum = {}));
var Licer503ApplicationJsonErrorDescriptionEnum;
(function (Licer503ApplicationJsonErrorDescriptionEnum) {
    Licer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Licer503ApplicationJsonErrorDescriptionEnum = exports.Licer503ApplicationJsonErrorDescriptionEnum || (exports.Licer503ApplicationJsonErrorDescriptionEnum = {}));
var Licer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Licer503ApplicationJson, _super);
    function Licer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Licer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Licer503ApplicationJson.prototype, "errorDescription", void 0);
    return Licer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Licer503ApplicationJson = Licer503ApplicationJson;
var Licer504ApplicationJsonErrorEnum;
(function (Licer504ApplicationJsonErrorEnum) {
    Licer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Licer504ApplicationJsonErrorEnum = exports.Licer504ApplicationJsonErrorEnum || (exports.Licer504ApplicationJsonErrorEnum = {}));
var Licer504ApplicationJsonErrorDescriptionEnum;
(function (Licer504ApplicationJsonErrorDescriptionEnum) {
    Licer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Licer504ApplicationJsonErrorDescriptionEnum = exports.Licer504ApplicationJsonErrorDescriptionEnum || (exports.Licer504ApplicationJsonErrorDescriptionEnum = {}));
var Licer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Licer504ApplicationJson, _super);
    function Licer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Licer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Licer504ApplicationJson.prototype, "errorDescription", void 0);
    return Licer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Licer504ApplicationJson = Licer504ApplicationJson;
var LicerRequest = /** @class */ (function (_super) {
    __extends(LicerRequest, _super);
    function LicerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", LicerRequestBody)
    ], LicerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LicerSecurity)
    ], LicerRequest.prototype, "security", void 0);
    return LicerRequest;
}(utils_1.SpeakeasyBase));
exports.LicerRequest = LicerRequest;
var LicerResponse = /** @class */ (function (_super) {
    __extends(LicerResponse, _super);
    function LicerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], LicerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], LicerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Licer400ApplicationJson)
    ], LicerResponse.prototype, "licer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Licer401ApplicationJson)
    ], LicerResponse.prototype, "licer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Licer404ApplicationJson)
    ], LicerResponse.prototype, "licer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Licer500ApplicationJson)
    ], LicerResponse.prototype, "licer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Licer502ApplicationJson)
    ], LicerResponse.prototype, "licer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Licer503ApplicationJson)
    ], LicerResponse.prototype, "licer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Licer504ApplicationJson)
    ], LicerResponse.prototype, "licer504ApplicationJSONObject", void 0);
    return LicerResponse;
}(utils_1.SpeakeasyBase));
exports.LicerResponse = LicerResponse;
