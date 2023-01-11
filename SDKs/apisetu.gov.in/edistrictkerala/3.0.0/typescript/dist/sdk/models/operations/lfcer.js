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
exports.LfcerResponse = exports.LfcerRequest = exports.Lfcer504ApplicationJson = exports.Lfcer504ApplicationJsonErrorDescriptionEnum = exports.Lfcer504ApplicationJsonErrorEnum = exports.Lfcer503ApplicationJson = exports.Lfcer503ApplicationJsonErrorDescriptionEnum = exports.Lfcer503ApplicationJsonErrorEnum = exports.Lfcer502ApplicationJson = exports.Lfcer502ApplicationJsonErrorDescriptionEnum = exports.Lfcer502ApplicationJsonErrorEnum = exports.Lfcer500ApplicationJson = exports.Lfcer500ApplicationJsonErrorDescriptionEnum = exports.Lfcer500ApplicationJsonErrorEnum = exports.Lfcer404ApplicationJson = exports.Lfcer404ApplicationJsonErrorDescriptionEnum = exports.Lfcer404ApplicationJsonErrorEnum = exports.Lfcer401ApplicationJson = exports.Lfcer401ApplicationJsonErrorDescriptionEnum = exports.Lfcer401ApplicationJsonErrorEnum = exports.Lfcer400ApplicationJson = exports.Lfcer400ApplicationJsonErrorDescriptionEnum = exports.Lfcer400ApplicationJsonErrorEnum = exports.LfcerSecurity = exports.LfcerRequestBody = exports.LfcerRequestBodyFormatEnum = exports.LfcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var LfcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(LfcerRequestBodyCertificateParameters, _super);
    function LfcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], LfcerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], LfcerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], LfcerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return LfcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.LfcerRequestBodyCertificateParameters = LfcerRequestBodyCertificateParameters;
var LfcerRequestBodyFormatEnum;
(function (LfcerRequestBodyFormatEnum) {
    LfcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(LfcerRequestBodyFormatEnum = exports.LfcerRequestBodyFormatEnum || (exports.LfcerRequestBodyFormatEnum = {}));
var LfcerRequestBody = /** @class */ (function (_super) {
    __extends(LfcerRequestBody, _super);
    function LfcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", LfcerRequestBodyCertificateParameters)
    ], LfcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], LfcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], LfcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], LfcerRequestBody.prototype, "txnId", void 0);
    return LfcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.LfcerRequestBody = LfcerRequestBody;
var LfcerSecurity = /** @class */ (function (_super) {
    __extends(LfcerSecurity, _super);
    function LfcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], LfcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], LfcerSecurity.prototype, "clientId", void 0);
    return LfcerSecurity;
}(utils_1.SpeakeasyBase));
exports.LfcerSecurity = LfcerSecurity;
var Lfcer400ApplicationJsonErrorEnum;
(function (Lfcer400ApplicationJsonErrorEnum) {
    Lfcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Lfcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Lfcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Lfcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Lfcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Lfcer400ApplicationJsonErrorEnum = exports.Lfcer400ApplicationJsonErrorEnum || (exports.Lfcer400ApplicationJsonErrorEnum = {}));
var Lfcer400ApplicationJsonErrorDescriptionEnum;
(function (Lfcer400ApplicationJsonErrorDescriptionEnum) {
    Lfcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Lfcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Lfcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Lfcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Lfcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Lfcer400ApplicationJsonErrorDescriptionEnum = exports.Lfcer400ApplicationJsonErrorDescriptionEnum || (exports.Lfcer400ApplicationJsonErrorDescriptionEnum = {}));
var Lfcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Lfcer400ApplicationJson, _super);
    function Lfcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lfcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lfcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Lfcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Lfcer400ApplicationJson = Lfcer400ApplicationJson;
var Lfcer401ApplicationJsonErrorEnum;
(function (Lfcer401ApplicationJsonErrorEnum) {
    Lfcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Lfcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Lfcer401ApplicationJsonErrorEnum = exports.Lfcer401ApplicationJsonErrorEnum || (exports.Lfcer401ApplicationJsonErrorEnum = {}));
var Lfcer401ApplicationJsonErrorDescriptionEnum;
(function (Lfcer401ApplicationJsonErrorDescriptionEnum) {
    Lfcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Lfcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Lfcer401ApplicationJsonErrorDescriptionEnum = exports.Lfcer401ApplicationJsonErrorDescriptionEnum || (exports.Lfcer401ApplicationJsonErrorDescriptionEnum = {}));
var Lfcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Lfcer401ApplicationJson, _super);
    function Lfcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lfcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lfcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Lfcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Lfcer401ApplicationJson = Lfcer401ApplicationJson;
var Lfcer404ApplicationJsonErrorEnum;
(function (Lfcer404ApplicationJsonErrorEnum) {
    Lfcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Lfcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Lfcer404ApplicationJsonErrorEnum = exports.Lfcer404ApplicationJsonErrorEnum || (exports.Lfcer404ApplicationJsonErrorEnum = {}));
var Lfcer404ApplicationJsonErrorDescriptionEnum;
(function (Lfcer404ApplicationJsonErrorDescriptionEnum) {
    Lfcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Lfcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Lfcer404ApplicationJsonErrorDescriptionEnum = exports.Lfcer404ApplicationJsonErrorDescriptionEnum || (exports.Lfcer404ApplicationJsonErrorDescriptionEnum = {}));
var Lfcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Lfcer404ApplicationJson, _super);
    function Lfcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lfcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lfcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Lfcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Lfcer404ApplicationJson = Lfcer404ApplicationJson;
var Lfcer500ApplicationJsonErrorEnum;
(function (Lfcer500ApplicationJsonErrorEnum) {
    Lfcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Lfcer500ApplicationJsonErrorEnum = exports.Lfcer500ApplicationJsonErrorEnum || (exports.Lfcer500ApplicationJsonErrorEnum = {}));
var Lfcer500ApplicationJsonErrorDescriptionEnum;
(function (Lfcer500ApplicationJsonErrorDescriptionEnum) {
    Lfcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Lfcer500ApplicationJsonErrorDescriptionEnum = exports.Lfcer500ApplicationJsonErrorDescriptionEnum || (exports.Lfcer500ApplicationJsonErrorDescriptionEnum = {}));
var Lfcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Lfcer500ApplicationJson, _super);
    function Lfcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lfcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lfcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Lfcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Lfcer500ApplicationJson = Lfcer500ApplicationJson;
var Lfcer502ApplicationJsonErrorEnum;
(function (Lfcer502ApplicationJsonErrorEnum) {
    Lfcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Lfcer502ApplicationJsonErrorEnum = exports.Lfcer502ApplicationJsonErrorEnum || (exports.Lfcer502ApplicationJsonErrorEnum = {}));
var Lfcer502ApplicationJsonErrorDescriptionEnum;
(function (Lfcer502ApplicationJsonErrorDescriptionEnum) {
    Lfcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Lfcer502ApplicationJsonErrorDescriptionEnum = exports.Lfcer502ApplicationJsonErrorDescriptionEnum || (exports.Lfcer502ApplicationJsonErrorDescriptionEnum = {}));
var Lfcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Lfcer502ApplicationJson, _super);
    function Lfcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lfcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lfcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Lfcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Lfcer502ApplicationJson = Lfcer502ApplicationJson;
var Lfcer503ApplicationJsonErrorEnum;
(function (Lfcer503ApplicationJsonErrorEnum) {
    Lfcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Lfcer503ApplicationJsonErrorEnum = exports.Lfcer503ApplicationJsonErrorEnum || (exports.Lfcer503ApplicationJsonErrorEnum = {}));
var Lfcer503ApplicationJsonErrorDescriptionEnum;
(function (Lfcer503ApplicationJsonErrorDescriptionEnum) {
    Lfcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Lfcer503ApplicationJsonErrorDescriptionEnum = exports.Lfcer503ApplicationJsonErrorDescriptionEnum || (exports.Lfcer503ApplicationJsonErrorDescriptionEnum = {}));
var Lfcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Lfcer503ApplicationJson, _super);
    function Lfcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lfcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lfcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Lfcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Lfcer503ApplicationJson = Lfcer503ApplicationJson;
var Lfcer504ApplicationJsonErrorEnum;
(function (Lfcer504ApplicationJsonErrorEnum) {
    Lfcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Lfcer504ApplicationJsonErrorEnum = exports.Lfcer504ApplicationJsonErrorEnum || (exports.Lfcer504ApplicationJsonErrorEnum = {}));
var Lfcer504ApplicationJsonErrorDescriptionEnum;
(function (Lfcer504ApplicationJsonErrorDescriptionEnum) {
    Lfcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Lfcer504ApplicationJsonErrorDescriptionEnum = exports.Lfcer504ApplicationJsonErrorDescriptionEnum || (exports.Lfcer504ApplicationJsonErrorDescriptionEnum = {}));
var Lfcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Lfcer504ApplicationJson, _super);
    function Lfcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lfcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lfcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Lfcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Lfcer504ApplicationJson = Lfcer504ApplicationJson;
var LfcerRequest = /** @class */ (function (_super) {
    __extends(LfcerRequest, _super);
    function LfcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", LfcerRequestBody)
    ], LfcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LfcerSecurity)
    ], LfcerRequest.prototype, "security", void 0);
    return LfcerRequest;
}(utils_1.SpeakeasyBase));
exports.LfcerRequest = LfcerRequest;
var LfcerResponse = /** @class */ (function (_super) {
    __extends(LfcerResponse, _super);
    function LfcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], LfcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], LfcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Lfcer400ApplicationJson)
    ], LfcerResponse.prototype, "lfcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Lfcer401ApplicationJson)
    ], LfcerResponse.prototype, "lfcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Lfcer404ApplicationJson)
    ], LfcerResponse.prototype, "lfcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Lfcer500ApplicationJson)
    ], LfcerResponse.prototype, "lfcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Lfcer502ApplicationJson)
    ], LfcerResponse.prototype, "lfcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Lfcer503ApplicationJson)
    ], LfcerResponse.prototype, "lfcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Lfcer504ApplicationJson)
    ], LfcerResponse.prototype, "lfcer504ApplicationJSONObject", void 0);
    return LfcerResponse;
}(utils_1.SpeakeasyBase));
exports.LfcerResponse = LfcerResponse;
