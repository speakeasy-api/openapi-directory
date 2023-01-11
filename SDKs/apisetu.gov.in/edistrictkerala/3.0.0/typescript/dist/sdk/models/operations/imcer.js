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
exports.ImcerResponse = exports.ImcerRequest = exports.Imcer504ApplicationJson = exports.Imcer504ApplicationJsonErrorDescriptionEnum = exports.Imcer504ApplicationJsonErrorEnum = exports.Imcer503ApplicationJson = exports.Imcer503ApplicationJsonErrorDescriptionEnum = exports.Imcer503ApplicationJsonErrorEnum = exports.Imcer502ApplicationJson = exports.Imcer502ApplicationJsonErrorDescriptionEnum = exports.Imcer502ApplicationJsonErrorEnum = exports.Imcer500ApplicationJson = exports.Imcer500ApplicationJsonErrorDescriptionEnum = exports.Imcer500ApplicationJsonErrorEnum = exports.Imcer404ApplicationJson = exports.Imcer404ApplicationJsonErrorDescriptionEnum = exports.Imcer404ApplicationJsonErrorEnum = exports.Imcer401ApplicationJson = exports.Imcer401ApplicationJsonErrorDescriptionEnum = exports.Imcer401ApplicationJsonErrorEnum = exports.Imcer400ApplicationJson = exports.Imcer400ApplicationJsonErrorDescriptionEnum = exports.Imcer400ApplicationJsonErrorEnum = exports.ImcerSecurity = exports.ImcerRequestBody = exports.ImcerRequestBodyFormatEnum = exports.ImcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ImcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(ImcerRequestBodyCertificateParameters, _super);
    function ImcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], ImcerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], ImcerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], ImcerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return ImcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.ImcerRequestBodyCertificateParameters = ImcerRequestBodyCertificateParameters;
var ImcerRequestBodyFormatEnum;
(function (ImcerRequestBodyFormatEnum) {
    ImcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(ImcerRequestBodyFormatEnum = exports.ImcerRequestBodyFormatEnum || (exports.ImcerRequestBodyFormatEnum = {}));
var ImcerRequestBody = /** @class */ (function (_super) {
    __extends(ImcerRequestBody, _super);
    function ImcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", ImcerRequestBodyCertificateParameters)
    ], ImcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], ImcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], ImcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], ImcerRequestBody.prototype, "txnId", void 0);
    return ImcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.ImcerRequestBody = ImcerRequestBody;
var ImcerSecurity = /** @class */ (function (_super) {
    __extends(ImcerSecurity, _super);
    function ImcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], ImcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], ImcerSecurity.prototype, "clientId", void 0);
    return ImcerSecurity;
}(utils_1.SpeakeasyBase));
exports.ImcerSecurity = ImcerSecurity;
var Imcer400ApplicationJsonErrorEnum;
(function (Imcer400ApplicationJsonErrorEnum) {
    Imcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Imcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Imcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Imcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Imcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Imcer400ApplicationJsonErrorEnum = exports.Imcer400ApplicationJsonErrorEnum || (exports.Imcer400ApplicationJsonErrorEnum = {}));
var Imcer400ApplicationJsonErrorDescriptionEnum;
(function (Imcer400ApplicationJsonErrorDescriptionEnum) {
    Imcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Imcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Imcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Imcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Imcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Imcer400ApplicationJsonErrorDescriptionEnum = exports.Imcer400ApplicationJsonErrorDescriptionEnum || (exports.Imcer400ApplicationJsonErrorDescriptionEnum = {}));
var Imcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Imcer400ApplicationJson, _super);
    function Imcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Imcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Imcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Imcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Imcer400ApplicationJson = Imcer400ApplicationJson;
var Imcer401ApplicationJsonErrorEnum;
(function (Imcer401ApplicationJsonErrorEnum) {
    Imcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Imcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Imcer401ApplicationJsonErrorEnum = exports.Imcer401ApplicationJsonErrorEnum || (exports.Imcer401ApplicationJsonErrorEnum = {}));
var Imcer401ApplicationJsonErrorDescriptionEnum;
(function (Imcer401ApplicationJsonErrorDescriptionEnum) {
    Imcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Imcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Imcer401ApplicationJsonErrorDescriptionEnum = exports.Imcer401ApplicationJsonErrorDescriptionEnum || (exports.Imcer401ApplicationJsonErrorDescriptionEnum = {}));
var Imcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Imcer401ApplicationJson, _super);
    function Imcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Imcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Imcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Imcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Imcer401ApplicationJson = Imcer401ApplicationJson;
var Imcer404ApplicationJsonErrorEnum;
(function (Imcer404ApplicationJsonErrorEnum) {
    Imcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Imcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Imcer404ApplicationJsonErrorEnum = exports.Imcer404ApplicationJsonErrorEnum || (exports.Imcer404ApplicationJsonErrorEnum = {}));
var Imcer404ApplicationJsonErrorDescriptionEnum;
(function (Imcer404ApplicationJsonErrorDescriptionEnum) {
    Imcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Imcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Imcer404ApplicationJsonErrorDescriptionEnum = exports.Imcer404ApplicationJsonErrorDescriptionEnum || (exports.Imcer404ApplicationJsonErrorDescriptionEnum = {}));
var Imcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Imcer404ApplicationJson, _super);
    function Imcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Imcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Imcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Imcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Imcer404ApplicationJson = Imcer404ApplicationJson;
var Imcer500ApplicationJsonErrorEnum;
(function (Imcer500ApplicationJsonErrorEnum) {
    Imcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Imcer500ApplicationJsonErrorEnum = exports.Imcer500ApplicationJsonErrorEnum || (exports.Imcer500ApplicationJsonErrorEnum = {}));
var Imcer500ApplicationJsonErrorDescriptionEnum;
(function (Imcer500ApplicationJsonErrorDescriptionEnum) {
    Imcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Imcer500ApplicationJsonErrorDescriptionEnum = exports.Imcer500ApplicationJsonErrorDescriptionEnum || (exports.Imcer500ApplicationJsonErrorDescriptionEnum = {}));
var Imcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Imcer500ApplicationJson, _super);
    function Imcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Imcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Imcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Imcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Imcer500ApplicationJson = Imcer500ApplicationJson;
var Imcer502ApplicationJsonErrorEnum;
(function (Imcer502ApplicationJsonErrorEnum) {
    Imcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Imcer502ApplicationJsonErrorEnum = exports.Imcer502ApplicationJsonErrorEnum || (exports.Imcer502ApplicationJsonErrorEnum = {}));
var Imcer502ApplicationJsonErrorDescriptionEnum;
(function (Imcer502ApplicationJsonErrorDescriptionEnum) {
    Imcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Imcer502ApplicationJsonErrorDescriptionEnum = exports.Imcer502ApplicationJsonErrorDescriptionEnum || (exports.Imcer502ApplicationJsonErrorDescriptionEnum = {}));
var Imcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Imcer502ApplicationJson, _super);
    function Imcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Imcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Imcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Imcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Imcer502ApplicationJson = Imcer502ApplicationJson;
var Imcer503ApplicationJsonErrorEnum;
(function (Imcer503ApplicationJsonErrorEnum) {
    Imcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Imcer503ApplicationJsonErrorEnum = exports.Imcer503ApplicationJsonErrorEnum || (exports.Imcer503ApplicationJsonErrorEnum = {}));
var Imcer503ApplicationJsonErrorDescriptionEnum;
(function (Imcer503ApplicationJsonErrorDescriptionEnum) {
    Imcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Imcer503ApplicationJsonErrorDescriptionEnum = exports.Imcer503ApplicationJsonErrorDescriptionEnum || (exports.Imcer503ApplicationJsonErrorDescriptionEnum = {}));
var Imcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Imcer503ApplicationJson, _super);
    function Imcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Imcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Imcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Imcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Imcer503ApplicationJson = Imcer503ApplicationJson;
var Imcer504ApplicationJsonErrorEnum;
(function (Imcer504ApplicationJsonErrorEnum) {
    Imcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Imcer504ApplicationJsonErrorEnum = exports.Imcer504ApplicationJsonErrorEnum || (exports.Imcer504ApplicationJsonErrorEnum = {}));
var Imcer504ApplicationJsonErrorDescriptionEnum;
(function (Imcer504ApplicationJsonErrorDescriptionEnum) {
    Imcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Imcer504ApplicationJsonErrorDescriptionEnum = exports.Imcer504ApplicationJsonErrorDescriptionEnum || (exports.Imcer504ApplicationJsonErrorDescriptionEnum = {}));
var Imcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Imcer504ApplicationJson, _super);
    function Imcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Imcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Imcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Imcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Imcer504ApplicationJson = Imcer504ApplicationJson;
var ImcerRequest = /** @class */ (function (_super) {
    __extends(ImcerRequest, _super);
    function ImcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ImcerRequestBody)
    ], ImcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImcerSecurity)
    ], ImcerRequest.prototype, "security", void 0);
    return ImcerRequest;
}(utils_1.SpeakeasyBase));
exports.ImcerRequest = ImcerRequest;
var ImcerResponse = /** @class */ (function (_super) {
    __extends(ImcerResponse, _super);
    function ImcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ImcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ImcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Imcer400ApplicationJson)
    ], ImcerResponse.prototype, "imcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Imcer401ApplicationJson)
    ], ImcerResponse.prototype, "imcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Imcer404ApplicationJson)
    ], ImcerResponse.prototype, "imcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Imcer500ApplicationJson)
    ], ImcerResponse.prototype, "imcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Imcer502ApplicationJson)
    ], ImcerResponse.prototype, "imcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Imcer503ApplicationJson)
    ], ImcerResponse.prototype, "imcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Imcer504ApplicationJson)
    ], ImcerResponse.prototype, "imcer504ApplicationJSONObject", void 0);
    return ImcerResponse;
}(utils_1.SpeakeasyBase));
exports.ImcerResponse = ImcerResponse;
