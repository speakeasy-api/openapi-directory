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
exports.SlcerResponse = exports.SlcerRequest = exports.Slcer504ApplicationJson = exports.Slcer504ApplicationJsonErrorDescriptionEnum = exports.Slcer504ApplicationJsonErrorEnum = exports.Slcer503ApplicationJson = exports.Slcer503ApplicationJsonErrorDescriptionEnum = exports.Slcer503ApplicationJsonErrorEnum = exports.Slcer502ApplicationJson = exports.Slcer502ApplicationJsonErrorDescriptionEnum = exports.Slcer502ApplicationJsonErrorEnum = exports.Slcer500ApplicationJson = exports.Slcer500ApplicationJsonErrorDescriptionEnum = exports.Slcer500ApplicationJsonErrorEnum = exports.Slcer404ApplicationJson = exports.Slcer404ApplicationJsonErrorDescriptionEnum = exports.Slcer404ApplicationJsonErrorEnum = exports.Slcer401ApplicationJson = exports.Slcer401ApplicationJsonErrorDescriptionEnum = exports.Slcer401ApplicationJsonErrorEnum = exports.Slcer400ApplicationJson = exports.Slcer400ApplicationJsonErrorDescriptionEnum = exports.Slcer400ApplicationJsonErrorEnum = exports.SlcerSecurity = exports.SlcerRequestBody = exports.SlcerRequestBodyFormatEnum = exports.SlcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SlcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(SlcerRequestBodyCertificateParameters, _super);
    function SlcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], SlcerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], SlcerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], SlcerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return SlcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.SlcerRequestBodyCertificateParameters = SlcerRequestBodyCertificateParameters;
var SlcerRequestBodyFormatEnum;
(function (SlcerRequestBodyFormatEnum) {
    SlcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(SlcerRequestBodyFormatEnum = exports.SlcerRequestBodyFormatEnum || (exports.SlcerRequestBodyFormatEnum = {}));
var SlcerRequestBody = /** @class */ (function (_super) {
    __extends(SlcerRequestBody, _super);
    function SlcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", SlcerRequestBodyCertificateParameters)
    ], SlcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], SlcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SlcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], SlcerRequestBody.prototype, "txnId", void 0);
    return SlcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.SlcerRequestBody = SlcerRequestBody;
var SlcerSecurity = /** @class */ (function (_super) {
    __extends(SlcerSecurity, _super);
    function SlcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SlcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], SlcerSecurity.prototype, "clientId", void 0);
    return SlcerSecurity;
}(utils_1.SpeakeasyBase));
exports.SlcerSecurity = SlcerSecurity;
var Slcer400ApplicationJsonErrorEnum;
(function (Slcer400ApplicationJsonErrorEnum) {
    Slcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Slcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Slcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Slcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Slcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Slcer400ApplicationJsonErrorEnum = exports.Slcer400ApplicationJsonErrorEnum || (exports.Slcer400ApplicationJsonErrorEnum = {}));
var Slcer400ApplicationJsonErrorDescriptionEnum;
(function (Slcer400ApplicationJsonErrorDescriptionEnum) {
    Slcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Slcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Slcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Slcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Slcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Slcer400ApplicationJsonErrorDescriptionEnum = exports.Slcer400ApplicationJsonErrorDescriptionEnum || (exports.Slcer400ApplicationJsonErrorDescriptionEnum = {}));
var Slcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Slcer400ApplicationJson, _super);
    function Slcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Slcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Slcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Slcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Slcer400ApplicationJson = Slcer400ApplicationJson;
var Slcer401ApplicationJsonErrorEnum;
(function (Slcer401ApplicationJsonErrorEnum) {
    Slcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Slcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Slcer401ApplicationJsonErrorEnum = exports.Slcer401ApplicationJsonErrorEnum || (exports.Slcer401ApplicationJsonErrorEnum = {}));
var Slcer401ApplicationJsonErrorDescriptionEnum;
(function (Slcer401ApplicationJsonErrorDescriptionEnum) {
    Slcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Slcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Slcer401ApplicationJsonErrorDescriptionEnum = exports.Slcer401ApplicationJsonErrorDescriptionEnum || (exports.Slcer401ApplicationJsonErrorDescriptionEnum = {}));
var Slcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Slcer401ApplicationJson, _super);
    function Slcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Slcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Slcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Slcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Slcer401ApplicationJson = Slcer401ApplicationJson;
var Slcer404ApplicationJsonErrorEnum;
(function (Slcer404ApplicationJsonErrorEnum) {
    Slcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Slcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Slcer404ApplicationJsonErrorEnum = exports.Slcer404ApplicationJsonErrorEnum || (exports.Slcer404ApplicationJsonErrorEnum = {}));
var Slcer404ApplicationJsonErrorDescriptionEnum;
(function (Slcer404ApplicationJsonErrorDescriptionEnum) {
    Slcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Slcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Slcer404ApplicationJsonErrorDescriptionEnum = exports.Slcer404ApplicationJsonErrorDescriptionEnum || (exports.Slcer404ApplicationJsonErrorDescriptionEnum = {}));
var Slcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Slcer404ApplicationJson, _super);
    function Slcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Slcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Slcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Slcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Slcer404ApplicationJson = Slcer404ApplicationJson;
var Slcer500ApplicationJsonErrorEnum;
(function (Slcer500ApplicationJsonErrorEnum) {
    Slcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Slcer500ApplicationJsonErrorEnum = exports.Slcer500ApplicationJsonErrorEnum || (exports.Slcer500ApplicationJsonErrorEnum = {}));
var Slcer500ApplicationJsonErrorDescriptionEnum;
(function (Slcer500ApplicationJsonErrorDescriptionEnum) {
    Slcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Slcer500ApplicationJsonErrorDescriptionEnum = exports.Slcer500ApplicationJsonErrorDescriptionEnum || (exports.Slcer500ApplicationJsonErrorDescriptionEnum = {}));
var Slcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Slcer500ApplicationJson, _super);
    function Slcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Slcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Slcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Slcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Slcer500ApplicationJson = Slcer500ApplicationJson;
var Slcer502ApplicationJsonErrorEnum;
(function (Slcer502ApplicationJsonErrorEnum) {
    Slcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Slcer502ApplicationJsonErrorEnum = exports.Slcer502ApplicationJsonErrorEnum || (exports.Slcer502ApplicationJsonErrorEnum = {}));
var Slcer502ApplicationJsonErrorDescriptionEnum;
(function (Slcer502ApplicationJsonErrorDescriptionEnum) {
    Slcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Slcer502ApplicationJsonErrorDescriptionEnum = exports.Slcer502ApplicationJsonErrorDescriptionEnum || (exports.Slcer502ApplicationJsonErrorDescriptionEnum = {}));
var Slcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Slcer502ApplicationJson, _super);
    function Slcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Slcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Slcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Slcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Slcer502ApplicationJson = Slcer502ApplicationJson;
var Slcer503ApplicationJsonErrorEnum;
(function (Slcer503ApplicationJsonErrorEnum) {
    Slcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Slcer503ApplicationJsonErrorEnum = exports.Slcer503ApplicationJsonErrorEnum || (exports.Slcer503ApplicationJsonErrorEnum = {}));
var Slcer503ApplicationJsonErrorDescriptionEnum;
(function (Slcer503ApplicationJsonErrorDescriptionEnum) {
    Slcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Slcer503ApplicationJsonErrorDescriptionEnum = exports.Slcer503ApplicationJsonErrorDescriptionEnum || (exports.Slcer503ApplicationJsonErrorDescriptionEnum = {}));
var Slcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Slcer503ApplicationJson, _super);
    function Slcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Slcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Slcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Slcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Slcer503ApplicationJson = Slcer503ApplicationJson;
var Slcer504ApplicationJsonErrorEnum;
(function (Slcer504ApplicationJsonErrorEnum) {
    Slcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Slcer504ApplicationJsonErrorEnum = exports.Slcer504ApplicationJsonErrorEnum || (exports.Slcer504ApplicationJsonErrorEnum = {}));
var Slcer504ApplicationJsonErrorDescriptionEnum;
(function (Slcer504ApplicationJsonErrorDescriptionEnum) {
    Slcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Slcer504ApplicationJsonErrorDescriptionEnum = exports.Slcer504ApplicationJsonErrorDescriptionEnum || (exports.Slcer504ApplicationJsonErrorDescriptionEnum = {}));
var Slcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Slcer504ApplicationJson, _super);
    function Slcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Slcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Slcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Slcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Slcer504ApplicationJson = Slcer504ApplicationJson;
var SlcerRequest = /** @class */ (function (_super) {
    __extends(SlcerRequest, _super);
    function SlcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", SlcerRequestBody)
    ], SlcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SlcerSecurity)
    ], SlcerRequest.prototype, "security", void 0);
    return SlcerRequest;
}(utils_1.SpeakeasyBase));
exports.SlcerRequest = SlcerRequest;
var SlcerResponse = /** @class */ (function (_super) {
    __extends(SlcerResponse, _super);
    function SlcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SlcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SlcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Slcer400ApplicationJson)
    ], SlcerResponse.prototype, "slcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Slcer401ApplicationJson)
    ], SlcerResponse.prototype, "slcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Slcer404ApplicationJson)
    ], SlcerResponse.prototype, "slcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Slcer500ApplicationJson)
    ], SlcerResponse.prototype, "slcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Slcer502ApplicationJson)
    ], SlcerResponse.prototype, "slcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Slcer503ApplicationJson)
    ], SlcerResponse.prototype, "slcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Slcer504ApplicationJson)
    ], SlcerResponse.prototype, "slcer504ApplicationJSONObject", void 0);
    return SlcerResponse;
}(utils_1.SpeakeasyBase));
exports.SlcerResponse = SlcerResponse;
