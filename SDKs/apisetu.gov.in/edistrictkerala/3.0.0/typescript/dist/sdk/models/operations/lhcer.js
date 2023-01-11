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
exports.LhcerResponse = exports.LhcerRequest = exports.Lhcer504ApplicationJson = exports.Lhcer504ApplicationJsonErrorDescriptionEnum = exports.Lhcer504ApplicationJsonErrorEnum = exports.Lhcer503ApplicationJson = exports.Lhcer503ApplicationJsonErrorDescriptionEnum = exports.Lhcer503ApplicationJsonErrorEnum = exports.Lhcer502ApplicationJson = exports.Lhcer502ApplicationJsonErrorDescriptionEnum = exports.Lhcer502ApplicationJsonErrorEnum = exports.Lhcer500ApplicationJson = exports.Lhcer500ApplicationJsonErrorDescriptionEnum = exports.Lhcer500ApplicationJsonErrorEnum = exports.Lhcer404ApplicationJson = exports.Lhcer404ApplicationJsonErrorDescriptionEnum = exports.Lhcer404ApplicationJsonErrorEnum = exports.Lhcer401ApplicationJson = exports.Lhcer401ApplicationJsonErrorDescriptionEnum = exports.Lhcer401ApplicationJsonErrorEnum = exports.Lhcer400ApplicationJson = exports.Lhcer400ApplicationJsonErrorDescriptionEnum = exports.Lhcer400ApplicationJsonErrorEnum = exports.LhcerSecurity = exports.LhcerRequestBody = exports.LhcerRequestBodyFormatEnum = exports.LhcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var LhcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(LhcerRequestBodyCertificateParameters, _super);
    function LhcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], LhcerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], LhcerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], LhcerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return LhcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.LhcerRequestBodyCertificateParameters = LhcerRequestBodyCertificateParameters;
var LhcerRequestBodyFormatEnum;
(function (LhcerRequestBodyFormatEnum) {
    LhcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(LhcerRequestBodyFormatEnum = exports.LhcerRequestBodyFormatEnum || (exports.LhcerRequestBodyFormatEnum = {}));
var LhcerRequestBody = /** @class */ (function (_super) {
    __extends(LhcerRequestBody, _super);
    function LhcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", LhcerRequestBodyCertificateParameters)
    ], LhcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], LhcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], LhcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], LhcerRequestBody.prototype, "txnId", void 0);
    return LhcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.LhcerRequestBody = LhcerRequestBody;
var LhcerSecurity = /** @class */ (function (_super) {
    __extends(LhcerSecurity, _super);
    function LhcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], LhcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], LhcerSecurity.prototype, "clientId", void 0);
    return LhcerSecurity;
}(utils_1.SpeakeasyBase));
exports.LhcerSecurity = LhcerSecurity;
var Lhcer400ApplicationJsonErrorEnum;
(function (Lhcer400ApplicationJsonErrorEnum) {
    Lhcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Lhcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Lhcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Lhcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Lhcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Lhcer400ApplicationJsonErrorEnum = exports.Lhcer400ApplicationJsonErrorEnum || (exports.Lhcer400ApplicationJsonErrorEnum = {}));
var Lhcer400ApplicationJsonErrorDescriptionEnum;
(function (Lhcer400ApplicationJsonErrorDescriptionEnum) {
    Lhcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Lhcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Lhcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Lhcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Lhcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Lhcer400ApplicationJsonErrorDescriptionEnum = exports.Lhcer400ApplicationJsonErrorDescriptionEnum || (exports.Lhcer400ApplicationJsonErrorDescriptionEnum = {}));
var Lhcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Lhcer400ApplicationJson, _super);
    function Lhcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lhcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lhcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Lhcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Lhcer400ApplicationJson = Lhcer400ApplicationJson;
var Lhcer401ApplicationJsonErrorEnum;
(function (Lhcer401ApplicationJsonErrorEnum) {
    Lhcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Lhcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Lhcer401ApplicationJsonErrorEnum = exports.Lhcer401ApplicationJsonErrorEnum || (exports.Lhcer401ApplicationJsonErrorEnum = {}));
var Lhcer401ApplicationJsonErrorDescriptionEnum;
(function (Lhcer401ApplicationJsonErrorDescriptionEnum) {
    Lhcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Lhcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Lhcer401ApplicationJsonErrorDescriptionEnum = exports.Lhcer401ApplicationJsonErrorDescriptionEnum || (exports.Lhcer401ApplicationJsonErrorDescriptionEnum = {}));
var Lhcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Lhcer401ApplicationJson, _super);
    function Lhcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lhcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lhcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Lhcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Lhcer401ApplicationJson = Lhcer401ApplicationJson;
var Lhcer404ApplicationJsonErrorEnum;
(function (Lhcer404ApplicationJsonErrorEnum) {
    Lhcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Lhcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Lhcer404ApplicationJsonErrorEnum = exports.Lhcer404ApplicationJsonErrorEnum || (exports.Lhcer404ApplicationJsonErrorEnum = {}));
var Lhcer404ApplicationJsonErrorDescriptionEnum;
(function (Lhcer404ApplicationJsonErrorDescriptionEnum) {
    Lhcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Lhcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Lhcer404ApplicationJsonErrorDescriptionEnum = exports.Lhcer404ApplicationJsonErrorDescriptionEnum || (exports.Lhcer404ApplicationJsonErrorDescriptionEnum = {}));
var Lhcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Lhcer404ApplicationJson, _super);
    function Lhcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lhcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lhcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Lhcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Lhcer404ApplicationJson = Lhcer404ApplicationJson;
var Lhcer500ApplicationJsonErrorEnum;
(function (Lhcer500ApplicationJsonErrorEnum) {
    Lhcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Lhcer500ApplicationJsonErrorEnum = exports.Lhcer500ApplicationJsonErrorEnum || (exports.Lhcer500ApplicationJsonErrorEnum = {}));
var Lhcer500ApplicationJsonErrorDescriptionEnum;
(function (Lhcer500ApplicationJsonErrorDescriptionEnum) {
    Lhcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Lhcer500ApplicationJsonErrorDescriptionEnum = exports.Lhcer500ApplicationJsonErrorDescriptionEnum || (exports.Lhcer500ApplicationJsonErrorDescriptionEnum = {}));
var Lhcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Lhcer500ApplicationJson, _super);
    function Lhcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lhcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lhcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Lhcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Lhcer500ApplicationJson = Lhcer500ApplicationJson;
var Lhcer502ApplicationJsonErrorEnum;
(function (Lhcer502ApplicationJsonErrorEnum) {
    Lhcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Lhcer502ApplicationJsonErrorEnum = exports.Lhcer502ApplicationJsonErrorEnum || (exports.Lhcer502ApplicationJsonErrorEnum = {}));
var Lhcer502ApplicationJsonErrorDescriptionEnum;
(function (Lhcer502ApplicationJsonErrorDescriptionEnum) {
    Lhcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Lhcer502ApplicationJsonErrorDescriptionEnum = exports.Lhcer502ApplicationJsonErrorDescriptionEnum || (exports.Lhcer502ApplicationJsonErrorDescriptionEnum = {}));
var Lhcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Lhcer502ApplicationJson, _super);
    function Lhcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lhcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lhcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Lhcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Lhcer502ApplicationJson = Lhcer502ApplicationJson;
var Lhcer503ApplicationJsonErrorEnum;
(function (Lhcer503ApplicationJsonErrorEnum) {
    Lhcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Lhcer503ApplicationJsonErrorEnum = exports.Lhcer503ApplicationJsonErrorEnum || (exports.Lhcer503ApplicationJsonErrorEnum = {}));
var Lhcer503ApplicationJsonErrorDescriptionEnum;
(function (Lhcer503ApplicationJsonErrorDescriptionEnum) {
    Lhcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Lhcer503ApplicationJsonErrorDescriptionEnum = exports.Lhcer503ApplicationJsonErrorDescriptionEnum || (exports.Lhcer503ApplicationJsonErrorDescriptionEnum = {}));
var Lhcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Lhcer503ApplicationJson, _super);
    function Lhcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lhcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lhcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Lhcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Lhcer503ApplicationJson = Lhcer503ApplicationJson;
var Lhcer504ApplicationJsonErrorEnum;
(function (Lhcer504ApplicationJsonErrorEnum) {
    Lhcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Lhcer504ApplicationJsonErrorEnum = exports.Lhcer504ApplicationJsonErrorEnum || (exports.Lhcer504ApplicationJsonErrorEnum = {}));
var Lhcer504ApplicationJsonErrorDescriptionEnum;
(function (Lhcer504ApplicationJsonErrorDescriptionEnum) {
    Lhcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Lhcer504ApplicationJsonErrorDescriptionEnum = exports.Lhcer504ApplicationJsonErrorDescriptionEnum || (exports.Lhcer504ApplicationJsonErrorDescriptionEnum = {}));
var Lhcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Lhcer504ApplicationJson, _super);
    function Lhcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Lhcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Lhcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Lhcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Lhcer504ApplicationJson = Lhcer504ApplicationJson;
var LhcerRequest = /** @class */ (function (_super) {
    __extends(LhcerRequest, _super);
    function LhcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", LhcerRequestBody)
    ], LhcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LhcerSecurity)
    ], LhcerRequest.prototype, "security", void 0);
    return LhcerRequest;
}(utils_1.SpeakeasyBase));
exports.LhcerRequest = LhcerRequest;
var LhcerResponse = /** @class */ (function (_super) {
    __extends(LhcerResponse, _super);
    function LhcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], LhcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], LhcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Lhcer400ApplicationJson)
    ], LhcerResponse.prototype, "lhcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Lhcer401ApplicationJson)
    ], LhcerResponse.prototype, "lhcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Lhcer404ApplicationJson)
    ], LhcerResponse.prototype, "lhcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Lhcer500ApplicationJson)
    ], LhcerResponse.prototype, "lhcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Lhcer502ApplicationJson)
    ], LhcerResponse.prototype, "lhcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Lhcer503ApplicationJson)
    ], LhcerResponse.prototype, "lhcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Lhcer504ApplicationJson)
    ], LhcerResponse.prototype, "lhcer504ApplicationJSONObject", void 0);
    return LhcerResponse;
}(utils_1.SpeakeasyBase));
exports.LhcerResponse = LhcerResponse;
