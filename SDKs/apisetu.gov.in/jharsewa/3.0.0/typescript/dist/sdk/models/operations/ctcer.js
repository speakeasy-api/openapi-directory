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
exports.CtcerResponse = exports.CtcerRequest = exports.Ctcer504ApplicationJson = exports.Ctcer504ApplicationJsonErrorDescriptionEnum = exports.Ctcer504ApplicationJsonErrorEnum = exports.Ctcer503ApplicationJson = exports.Ctcer503ApplicationJsonErrorDescriptionEnum = exports.Ctcer503ApplicationJsonErrorEnum = exports.Ctcer502ApplicationJson = exports.Ctcer502ApplicationJsonErrorDescriptionEnum = exports.Ctcer502ApplicationJsonErrorEnum = exports.Ctcer500ApplicationJson = exports.Ctcer500ApplicationJsonErrorDescriptionEnum = exports.Ctcer500ApplicationJsonErrorEnum = exports.Ctcer404ApplicationJson = exports.Ctcer404ApplicationJsonErrorDescriptionEnum = exports.Ctcer404ApplicationJsonErrorEnum = exports.Ctcer401ApplicationJson = exports.Ctcer401ApplicationJsonErrorDescriptionEnum = exports.Ctcer401ApplicationJsonErrorEnum = exports.Ctcer400ApplicationJson = exports.Ctcer400ApplicationJsonErrorDescriptionEnum = exports.Ctcer400ApplicationJsonErrorEnum = exports.CtcerSecurity = exports.CtcerRequestBody = exports.CtcerRequestBodyFormatEnum = exports.CtcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CtcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(CtcerRequestBodyCertificateParameters, _super);
    function CtcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], CtcerRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], CtcerRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return CtcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.CtcerRequestBodyCertificateParameters = CtcerRequestBodyCertificateParameters;
var CtcerRequestBodyFormatEnum;
(function (CtcerRequestBodyFormatEnum) {
    CtcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(CtcerRequestBodyFormatEnum = exports.CtcerRequestBodyFormatEnum || (exports.CtcerRequestBodyFormatEnum = {}));
var CtcerRequestBody = /** @class */ (function (_super) {
    __extends(CtcerRequestBody, _super);
    function CtcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", CtcerRequestBodyCertificateParameters)
    ], CtcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], CtcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], CtcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], CtcerRequestBody.prototype, "txnId", void 0);
    return CtcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.CtcerRequestBody = CtcerRequestBody;
var CtcerSecurity = /** @class */ (function (_super) {
    __extends(CtcerSecurity, _super);
    function CtcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], CtcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], CtcerSecurity.prototype, "clientId", void 0);
    return CtcerSecurity;
}(utils_1.SpeakeasyBase));
exports.CtcerSecurity = CtcerSecurity;
var Ctcer400ApplicationJsonErrorEnum;
(function (Ctcer400ApplicationJsonErrorEnum) {
    Ctcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Ctcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Ctcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Ctcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Ctcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Ctcer400ApplicationJsonErrorEnum = exports.Ctcer400ApplicationJsonErrorEnum || (exports.Ctcer400ApplicationJsonErrorEnum = {}));
var Ctcer400ApplicationJsonErrorDescriptionEnum;
(function (Ctcer400ApplicationJsonErrorDescriptionEnum) {
    Ctcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Ctcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Ctcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Ctcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Ctcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Ctcer400ApplicationJsonErrorDescriptionEnum = exports.Ctcer400ApplicationJsonErrorDescriptionEnum || (exports.Ctcer400ApplicationJsonErrorDescriptionEnum = {}));
var Ctcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Ctcer400ApplicationJson, _super);
    function Ctcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ctcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ctcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Ctcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ctcer400ApplicationJson = Ctcer400ApplicationJson;
var Ctcer401ApplicationJsonErrorEnum;
(function (Ctcer401ApplicationJsonErrorEnum) {
    Ctcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Ctcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Ctcer401ApplicationJsonErrorEnum = exports.Ctcer401ApplicationJsonErrorEnum || (exports.Ctcer401ApplicationJsonErrorEnum = {}));
var Ctcer401ApplicationJsonErrorDescriptionEnum;
(function (Ctcer401ApplicationJsonErrorDescriptionEnum) {
    Ctcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Ctcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Ctcer401ApplicationJsonErrorDescriptionEnum = exports.Ctcer401ApplicationJsonErrorDescriptionEnum || (exports.Ctcer401ApplicationJsonErrorDescriptionEnum = {}));
var Ctcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Ctcer401ApplicationJson, _super);
    function Ctcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ctcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ctcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Ctcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ctcer401ApplicationJson = Ctcer401ApplicationJson;
var Ctcer404ApplicationJsonErrorEnum;
(function (Ctcer404ApplicationJsonErrorEnum) {
    Ctcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Ctcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Ctcer404ApplicationJsonErrorEnum = exports.Ctcer404ApplicationJsonErrorEnum || (exports.Ctcer404ApplicationJsonErrorEnum = {}));
var Ctcer404ApplicationJsonErrorDescriptionEnum;
(function (Ctcer404ApplicationJsonErrorDescriptionEnum) {
    Ctcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Ctcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Ctcer404ApplicationJsonErrorDescriptionEnum = exports.Ctcer404ApplicationJsonErrorDescriptionEnum || (exports.Ctcer404ApplicationJsonErrorDescriptionEnum = {}));
var Ctcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Ctcer404ApplicationJson, _super);
    function Ctcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ctcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ctcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Ctcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ctcer404ApplicationJson = Ctcer404ApplicationJson;
var Ctcer500ApplicationJsonErrorEnum;
(function (Ctcer500ApplicationJsonErrorEnum) {
    Ctcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Ctcer500ApplicationJsonErrorEnum = exports.Ctcer500ApplicationJsonErrorEnum || (exports.Ctcer500ApplicationJsonErrorEnum = {}));
var Ctcer500ApplicationJsonErrorDescriptionEnum;
(function (Ctcer500ApplicationJsonErrorDescriptionEnum) {
    Ctcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Ctcer500ApplicationJsonErrorDescriptionEnum = exports.Ctcer500ApplicationJsonErrorDescriptionEnum || (exports.Ctcer500ApplicationJsonErrorDescriptionEnum = {}));
var Ctcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Ctcer500ApplicationJson, _super);
    function Ctcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ctcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ctcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Ctcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ctcer500ApplicationJson = Ctcer500ApplicationJson;
var Ctcer502ApplicationJsonErrorEnum;
(function (Ctcer502ApplicationJsonErrorEnum) {
    Ctcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Ctcer502ApplicationJsonErrorEnum = exports.Ctcer502ApplicationJsonErrorEnum || (exports.Ctcer502ApplicationJsonErrorEnum = {}));
var Ctcer502ApplicationJsonErrorDescriptionEnum;
(function (Ctcer502ApplicationJsonErrorDescriptionEnum) {
    Ctcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Ctcer502ApplicationJsonErrorDescriptionEnum = exports.Ctcer502ApplicationJsonErrorDescriptionEnum || (exports.Ctcer502ApplicationJsonErrorDescriptionEnum = {}));
var Ctcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Ctcer502ApplicationJson, _super);
    function Ctcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ctcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ctcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Ctcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ctcer502ApplicationJson = Ctcer502ApplicationJson;
var Ctcer503ApplicationJsonErrorEnum;
(function (Ctcer503ApplicationJsonErrorEnum) {
    Ctcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Ctcer503ApplicationJsonErrorEnum = exports.Ctcer503ApplicationJsonErrorEnum || (exports.Ctcer503ApplicationJsonErrorEnum = {}));
var Ctcer503ApplicationJsonErrorDescriptionEnum;
(function (Ctcer503ApplicationJsonErrorDescriptionEnum) {
    Ctcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Ctcer503ApplicationJsonErrorDescriptionEnum = exports.Ctcer503ApplicationJsonErrorDescriptionEnum || (exports.Ctcer503ApplicationJsonErrorDescriptionEnum = {}));
var Ctcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Ctcer503ApplicationJson, _super);
    function Ctcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ctcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ctcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Ctcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ctcer503ApplicationJson = Ctcer503ApplicationJson;
var Ctcer504ApplicationJsonErrorEnum;
(function (Ctcer504ApplicationJsonErrorEnum) {
    Ctcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Ctcer504ApplicationJsonErrorEnum = exports.Ctcer504ApplicationJsonErrorEnum || (exports.Ctcer504ApplicationJsonErrorEnum = {}));
var Ctcer504ApplicationJsonErrorDescriptionEnum;
(function (Ctcer504ApplicationJsonErrorDescriptionEnum) {
    Ctcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Ctcer504ApplicationJsonErrorDescriptionEnum = exports.Ctcer504ApplicationJsonErrorDescriptionEnum || (exports.Ctcer504ApplicationJsonErrorDescriptionEnum = {}));
var Ctcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Ctcer504ApplicationJson, _super);
    function Ctcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ctcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ctcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Ctcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ctcer504ApplicationJson = Ctcer504ApplicationJson;
var CtcerRequest = /** @class */ (function (_super) {
    __extends(CtcerRequest, _super);
    function CtcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CtcerRequestBody)
    ], CtcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CtcerSecurity)
    ], CtcerRequest.prototype, "security", void 0);
    return CtcerRequest;
}(utils_1.SpeakeasyBase));
exports.CtcerRequest = CtcerRequest;
var CtcerResponse = /** @class */ (function (_super) {
    __extends(CtcerResponse, _super);
    function CtcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CtcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CtcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ctcer400ApplicationJson)
    ], CtcerResponse.prototype, "ctcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ctcer401ApplicationJson)
    ], CtcerResponse.prototype, "ctcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ctcer404ApplicationJson)
    ], CtcerResponse.prototype, "ctcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ctcer500ApplicationJson)
    ], CtcerResponse.prototype, "ctcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ctcer502ApplicationJson)
    ], CtcerResponse.prototype, "ctcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ctcer503ApplicationJson)
    ], CtcerResponse.prototype, "ctcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ctcer504ApplicationJson)
    ], CtcerResponse.prototype, "ctcer504ApplicationJSONObject", void 0);
    return CtcerResponse;
}(utils_1.SpeakeasyBase));
exports.CtcerResponse = CtcerResponse;
