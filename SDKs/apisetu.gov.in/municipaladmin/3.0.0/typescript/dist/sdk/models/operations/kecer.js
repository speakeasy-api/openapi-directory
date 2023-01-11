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
exports.KecerResponse = exports.KecerRequest = exports.Kecer504ApplicationJson = exports.Kecer504ApplicationJsonErrorDescriptionEnum = exports.Kecer504ApplicationJsonErrorEnum = exports.Kecer503ApplicationJson = exports.Kecer503ApplicationJsonErrorDescriptionEnum = exports.Kecer503ApplicationJsonErrorEnum = exports.Kecer502ApplicationJson = exports.Kecer502ApplicationJsonErrorDescriptionEnum = exports.Kecer502ApplicationJsonErrorEnum = exports.Kecer500ApplicationJson = exports.Kecer500ApplicationJsonErrorDescriptionEnum = exports.Kecer500ApplicationJsonErrorEnum = exports.Kecer404ApplicationJson = exports.Kecer404ApplicationJsonErrorDescriptionEnum = exports.Kecer404ApplicationJsonErrorEnum = exports.Kecer401ApplicationJson = exports.Kecer401ApplicationJsonErrorDescriptionEnum = exports.Kecer401ApplicationJsonErrorEnum = exports.Kecer400ApplicationJson = exports.Kecer400ApplicationJsonErrorDescriptionEnum = exports.Kecer400ApplicationJsonErrorEnum = exports.KecerSecurity = exports.KecerRequestBody = exports.KecerRequestBodyFormatEnum = exports.KecerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var KecerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(KecerRequestBodyCertificateParameters, _super);
    function KecerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DocumentNumber" }),
        __metadata("design:type", String)
    ], KecerRequestBodyCertificateParameters.prototype, "documentNumber", void 0);
    return KecerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.KecerRequestBodyCertificateParameters = KecerRequestBodyCertificateParameters;
var KecerRequestBodyFormatEnum;
(function (KecerRequestBodyFormatEnum) {
    KecerRequestBodyFormatEnum["Pdf"] = "pdf";
})(KecerRequestBodyFormatEnum = exports.KecerRequestBodyFormatEnum || (exports.KecerRequestBodyFormatEnum = {}));
var KecerRequestBody = /** @class */ (function (_super) {
    __extends(KecerRequestBody, _super);
    function KecerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", KecerRequestBodyCertificateParameters)
    ], KecerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], KecerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], KecerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], KecerRequestBody.prototype, "txnId", void 0);
    return KecerRequestBody;
}(utils_1.SpeakeasyBase));
exports.KecerRequestBody = KecerRequestBody;
var KecerSecurity = /** @class */ (function (_super) {
    __extends(KecerSecurity, _super);
    function KecerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], KecerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], KecerSecurity.prototype, "clientId", void 0);
    return KecerSecurity;
}(utils_1.SpeakeasyBase));
exports.KecerSecurity = KecerSecurity;
var Kecer400ApplicationJsonErrorEnum;
(function (Kecer400ApplicationJsonErrorEnum) {
    Kecer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Kecer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Kecer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Kecer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Kecer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Kecer400ApplicationJsonErrorEnum = exports.Kecer400ApplicationJsonErrorEnum || (exports.Kecer400ApplicationJsonErrorEnum = {}));
var Kecer400ApplicationJsonErrorDescriptionEnum;
(function (Kecer400ApplicationJsonErrorDescriptionEnum) {
    Kecer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Kecer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Kecer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Kecer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Kecer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Kecer400ApplicationJsonErrorDescriptionEnum = exports.Kecer400ApplicationJsonErrorDescriptionEnum || (exports.Kecer400ApplicationJsonErrorDescriptionEnum = {}));
var Kecer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Kecer400ApplicationJson, _super);
    function Kecer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Kecer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Kecer400ApplicationJson.prototype, "errorDescription", void 0);
    return Kecer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Kecer400ApplicationJson = Kecer400ApplicationJson;
var Kecer401ApplicationJsonErrorEnum;
(function (Kecer401ApplicationJsonErrorEnum) {
    Kecer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Kecer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Kecer401ApplicationJsonErrorEnum = exports.Kecer401ApplicationJsonErrorEnum || (exports.Kecer401ApplicationJsonErrorEnum = {}));
var Kecer401ApplicationJsonErrorDescriptionEnum;
(function (Kecer401ApplicationJsonErrorDescriptionEnum) {
    Kecer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Kecer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Kecer401ApplicationJsonErrorDescriptionEnum = exports.Kecer401ApplicationJsonErrorDescriptionEnum || (exports.Kecer401ApplicationJsonErrorDescriptionEnum = {}));
var Kecer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Kecer401ApplicationJson, _super);
    function Kecer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Kecer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Kecer401ApplicationJson.prototype, "errorDescription", void 0);
    return Kecer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Kecer401ApplicationJson = Kecer401ApplicationJson;
var Kecer404ApplicationJsonErrorEnum;
(function (Kecer404ApplicationJsonErrorEnum) {
    Kecer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Kecer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Kecer404ApplicationJsonErrorEnum = exports.Kecer404ApplicationJsonErrorEnum || (exports.Kecer404ApplicationJsonErrorEnum = {}));
var Kecer404ApplicationJsonErrorDescriptionEnum;
(function (Kecer404ApplicationJsonErrorDescriptionEnum) {
    Kecer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Kecer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Kecer404ApplicationJsonErrorDescriptionEnum = exports.Kecer404ApplicationJsonErrorDescriptionEnum || (exports.Kecer404ApplicationJsonErrorDescriptionEnum = {}));
var Kecer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Kecer404ApplicationJson, _super);
    function Kecer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Kecer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Kecer404ApplicationJson.prototype, "errorDescription", void 0);
    return Kecer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Kecer404ApplicationJson = Kecer404ApplicationJson;
var Kecer500ApplicationJsonErrorEnum;
(function (Kecer500ApplicationJsonErrorEnum) {
    Kecer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Kecer500ApplicationJsonErrorEnum = exports.Kecer500ApplicationJsonErrorEnum || (exports.Kecer500ApplicationJsonErrorEnum = {}));
var Kecer500ApplicationJsonErrorDescriptionEnum;
(function (Kecer500ApplicationJsonErrorDescriptionEnum) {
    Kecer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Kecer500ApplicationJsonErrorDescriptionEnum = exports.Kecer500ApplicationJsonErrorDescriptionEnum || (exports.Kecer500ApplicationJsonErrorDescriptionEnum = {}));
var Kecer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Kecer500ApplicationJson, _super);
    function Kecer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Kecer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Kecer500ApplicationJson.prototype, "errorDescription", void 0);
    return Kecer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Kecer500ApplicationJson = Kecer500ApplicationJson;
var Kecer502ApplicationJsonErrorEnum;
(function (Kecer502ApplicationJsonErrorEnum) {
    Kecer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Kecer502ApplicationJsonErrorEnum = exports.Kecer502ApplicationJsonErrorEnum || (exports.Kecer502ApplicationJsonErrorEnum = {}));
var Kecer502ApplicationJsonErrorDescriptionEnum;
(function (Kecer502ApplicationJsonErrorDescriptionEnum) {
    Kecer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Kecer502ApplicationJsonErrorDescriptionEnum = exports.Kecer502ApplicationJsonErrorDescriptionEnum || (exports.Kecer502ApplicationJsonErrorDescriptionEnum = {}));
var Kecer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Kecer502ApplicationJson, _super);
    function Kecer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Kecer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Kecer502ApplicationJson.prototype, "errorDescription", void 0);
    return Kecer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Kecer502ApplicationJson = Kecer502ApplicationJson;
var Kecer503ApplicationJsonErrorEnum;
(function (Kecer503ApplicationJsonErrorEnum) {
    Kecer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Kecer503ApplicationJsonErrorEnum = exports.Kecer503ApplicationJsonErrorEnum || (exports.Kecer503ApplicationJsonErrorEnum = {}));
var Kecer503ApplicationJsonErrorDescriptionEnum;
(function (Kecer503ApplicationJsonErrorDescriptionEnum) {
    Kecer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Kecer503ApplicationJsonErrorDescriptionEnum = exports.Kecer503ApplicationJsonErrorDescriptionEnum || (exports.Kecer503ApplicationJsonErrorDescriptionEnum = {}));
var Kecer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Kecer503ApplicationJson, _super);
    function Kecer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Kecer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Kecer503ApplicationJson.prototype, "errorDescription", void 0);
    return Kecer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Kecer503ApplicationJson = Kecer503ApplicationJson;
var Kecer504ApplicationJsonErrorEnum;
(function (Kecer504ApplicationJsonErrorEnum) {
    Kecer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Kecer504ApplicationJsonErrorEnum = exports.Kecer504ApplicationJsonErrorEnum || (exports.Kecer504ApplicationJsonErrorEnum = {}));
var Kecer504ApplicationJsonErrorDescriptionEnum;
(function (Kecer504ApplicationJsonErrorDescriptionEnum) {
    Kecer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Kecer504ApplicationJsonErrorDescriptionEnum = exports.Kecer504ApplicationJsonErrorDescriptionEnum || (exports.Kecer504ApplicationJsonErrorDescriptionEnum = {}));
var Kecer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Kecer504ApplicationJson, _super);
    function Kecer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Kecer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Kecer504ApplicationJson.prototype, "errorDescription", void 0);
    return Kecer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Kecer504ApplicationJson = Kecer504ApplicationJson;
var KecerRequest = /** @class */ (function (_super) {
    __extends(KecerRequest, _super);
    function KecerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", KecerRequestBody)
    ], KecerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", KecerSecurity)
    ], KecerRequest.prototype, "security", void 0);
    return KecerRequest;
}(utils_1.SpeakeasyBase));
exports.KecerRequest = KecerRequest;
var KecerResponse = /** @class */ (function (_super) {
    __extends(KecerResponse, _super);
    function KecerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], KecerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], KecerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Kecer400ApplicationJson)
    ], KecerResponse.prototype, "kecer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Kecer401ApplicationJson)
    ], KecerResponse.prototype, "kecer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Kecer404ApplicationJson)
    ], KecerResponse.prototype, "kecer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Kecer500ApplicationJson)
    ], KecerResponse.prototype, "kecer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Kecer502ApplicationJson)
    ], KecerResponse.prototype, "kecer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Kecer503ApplicationJson)
    ], KecerResponse.prototype, "kecer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Kecer504ApplicationJson)
    ], KecerResponse.prototype, "kecer504ApplicationJSONObject", void 0);
    return KecerResponse;
}(utils_1.SpeakeasyBase));
exports.KecerResponse = KecerResponse;
