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
exports.EwcerResponse = exports.EwcerRequest = exports.Ewcer504ApplicationJson = exports.Ewcer504ApplicationJsonErrorDescriptionEnum = exports.Ewcer504ApplicationJsonErrorEnum = exports.Ewcer503ApplicationJson = exports.Ewcer503ApplicationJsonErrorDescriptionEnum = exports.Ewcer503ApplicationJsonErrorEnum = exports.Ewcer502ApplicationJson = exports.Ewcer502ApplicationJsonErrorDescriptionEnum = exports.Ewcer502ApplicationJsonErrorEnum = exports.Ewcer500ApplicationJson = exports.Ewcer500ApplicationJsonErrorDescriptionEnum = exports.Ewcer500ApplicationJsonErrorEnum = exports.Ewcer404ApplicationJson = exports.Ewcer404ApplicationJsonErrorDescriptionEnum = exports.Ewcer404ApplicationJsonErrorEnum = exports.Ewcer401ApplicationJson = exports.Ewcer401ApplicationJsonErrorDescriptionEnum = exports.Ewcer401ApplicationJsonErrorEnum = exports.Ewcer400ApplicationJson = exports.Ewcer400ApplicationJsonErrorDescriptionEnum = exports.Ewcer400ApplicationJsonErrorEnum = exports.EwcerSecurity = exports.EwcerRequestBody = exports.EwcerRequestBodyFormatEnum = exports.EwcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EwcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(EwcerRequestBodyCertificateParameters, _super);
    function EwcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], EwcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], EwcerRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], EwcerRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], EwcerRequestBodyCertificateParameters.prototype, "uid", void 0);
    return EwcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.EwcerRequestBodyCertificateParameters = EwcerRequestBodyCertificateParameters;
var EwcerRequestBodyFormatEnum;
(function (EwcerRequestBodyFormatEnum) {
    EwcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(EwcerRequestBodyFormatEnum = exports.EwcerRequestBodyFormatEnum || (exports.EwcerRequestBodyFormatEnum = {}));
var EwcerRequestBody = /** @class */ (function (_super) {
    __extends(EwcerRequestBody, _super);
    function EwcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", EwcerRequestBodyCertificateParameters)
    ], EwcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], EwcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], EwcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], EwcerRequestBody.prototype, "txnId", void 0);
    return EwcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.EwcerRequestBody = EwcerRequestBody;
var EwcerSecurity = /** @class */ (function (_super) {
    __extends(EwcerSecurity, _super);
    function EwcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], EwcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], EwcerSecurity.prototype, "clientId", void 0);
    return EwcerSecurity;
}(utils_1.SpeakeasyBase));
exports.EwcerSecurity = EwcerSecurity;
var Ewcer400ApplicationJsonErrorEnum;
(function (Ewcer400ApplicationJsonErrorEnum) {
    Ewcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Ewcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Ewcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Ewcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Ewcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Ewcer400ApplicationJsonErrorEnum = exports.Ewcer400ApplicationJsonErrorEnum || (exports.Ewcer400ApplicationJsonErrorEnum = {}));
var Ewcer400ApplicationJsonErrorDescriptionEnum;
(function (Ewcer400ApplicationJsonErrorDescriptionEnum) {
    Ewcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Ewcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Ewcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Ewcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Ewcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Ewcer400ApplicationJsonErrorDescriptionEnum = exports.Ewcer400ApplicationJsonErrorDescriptionEnum || (exports.Ewcer400ApplicationJsonErrorDescriptionEnum = {}));
var Ewcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Ewcer400ApplicationJson, _super);
    function Ewcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ewcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ewcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Ewcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ewcer400ApplicationJson = Ewcer400ApplicationJson;
var Ewcer401ApplicationJsonErrorEnum;
(function (Ewcer401ApplicationJsonErrorEnum) {
    Ewcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Ewcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Ewcer401ApplicationJsonErrorEnum = exports.Ewcer401ApplicationJsonErrorEnum || (exports.Ewcer401ApplicationJsonErrorEnum = {}));
var Ewcer401ApplicationJsonErrorDescriptionEnum;
(function (Ewcer401ApplicationJsonErrorDescriptionEnum) {
    Ewcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Ewcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Ewcer401ApplicationJsonErrorDescriptionEnum = exports.Ewcer401ApplicationJsonErrorDescriptionEnum || (exports.Ewcer401ApplicationJsonErrorDescriptionEnum = {}));
var Ewcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Ewcer401ApplicationJson, _super);
    function Ewcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ewcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ewcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Ewcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ewcer401ApplicationJson = Ewcer401ApplicationJson;
var Ewcer404ApplicationJsonErrorEnum;
(function (Ewcer404ApplicationJsonErrorEnum) {
    Ewcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Ewcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Ewcer404ApplicationJsonErrorEnum = exports.Ewcer404ApplicationJsonErrorEnum || (exports.Ewcer404ApplicationJsonErrorEnum = {}));
var Ewcer404ApplicationJsonErrorDescriptionEnum;
(function (Ewcer404ApplicationJsonErrorDescriptionEnum) {
    Ewcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Ewcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Ewcer404ApplicationJsonErrorDescriptionEnum = exports.Ewcer404ApplicationJsonErrorDescriptionEnum || (exports.Ewcer404ApplicationJsonErrorDescriptionEnum = {}));
var Ewcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Ewcer404ApplicationJson, _super);
    function Ewcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ewcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ewcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Ewcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ewcer404ApplicationJson = Ewcer404ApplicationJson;
var Ewcer500ApplicationJsonErrorEnum;
(function (Ewcer500ApplicationJsonErrorEnum) {
    Ewcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Ewcer500ApplicationJsonErrorEnum = exports.Ewcer500ApplicationJsonErrorEnum || (exports.Ewcer500ApplicationJsonErrorEnum = {}));
var Ewcer500ApplicationJsonErrorDescriptionEnum;
(function (Ewcer500ApplicationJsonErrorDescriptionEnum) {
    Ewcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Ewcer500ApplicationJsonErrorDescriptionEnum = exports.Ewcer500ApplicationJsonErrorDescriptionEnum || (exports.Ewcer500ApplicationJsonErrorDescriptionEnum = {}));
var Ewcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Ewcer500ApplicationJson, _super);
    function Ewcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ewcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ewcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Ewcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ewcer500ApplicationJson = Ewcer500ApplicationJson;
var Ewcer502ApplicationJsonErrorEnum;
(function (Ewcer502ApplicationJsonErrorEnum) {
    Ewcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Ewcer502ApplicationJsonErrorEnum = exports.Ewcer502ApplicationJsonErrorEnum || (exports.Ewcer502ApplicationJsonErrorEnum = {}));
var Ewcer502ApplicationJsonErrorDescriptionEnum;
(function (Ewcer502ApplicationJsonErrorDescriptionEnum) {
    Ewcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Ewcer502ApplicationJsonErrorDescriptionEnum = exports.Ewcer502ApplicationJsonErrorDescriptionEnum || (exports.Ewcer502ApplicationJsonErrorDescriptionEnum = {}));
var Ewcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Ewcer502ApplicationJson, _super);
    function Ewcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ewcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ewcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Ewcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ewcer502ApplicationJson = Ewcer502ApplicationJson;
var Ewcer503ApplicationJsonErrorEnum;
(function (Ewcer503ApplicationJsonErrorEnum) {
    Ewcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Ewcer503ApplicationJsonErrorEnum = exports.Ewcer503ApplicationJsonErrorEnum || (exports.Ewcer503ApplicationJsonErrorEnum = {}));
var Ewcer503ApplicationJsonErrorDescriptionEnum;
(function (Ewcer503ApplicationJsonErrorDescriptionEnum) {
    Ewcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Ewcer503ApplicationJsonErrorDescriptionEnum = exports.Ewcer503ApplicationJsonErrorDescriptionEnum || (exports.Ewcer503ApplicationJsonErrorDescriptionEnum = {}));
var Ewcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Ewcer503ApplicationJson, _super);
    function Ewcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ewcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ewcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Ewcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ewcer503ApplicationJson = Ewcer503ApplicationJson;
var Ewcer504ApplicationJsonErrorEnum;
(function (Ewcer504ApplicationJsonErrorEnum) {
    Ewcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Ewcer504ApplicationJsonErrorEnum = exports.Ewcer504ApplicationJsonErrorEnum || (exports.Ewcer504ApplicationJsonErrorEnum = {}));
var Ewcer504ApplicationJsonErrorDescriptionEnum;
(function (Ewcer504ApplicationJsonErrorDescriptionEnum) {
    Ewcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Ewcer504ApplicationJsonErrorDescriptionEnum = exports.Ewcer504ApplicationJsonErrorDescriptionEnum || (exports.Ewcer504ApplicationJsonErrorDescriptionEnum = {}));
var Ewcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Ewcer504ApplicationJson, _super);
    function Ewcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ewcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ewcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Ewcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ewcer504ApplicationJson = Ewcer504ApplicationJson;
var EwcerRequest = /** @class */ (function (_super) {
    __extends(EwcerRequest, _super);
    function EwcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", EwcerRequestBody)
    ], EwcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EwcerSecurity)
    ], EwcerRequest.prototype, "security", void 0);
    return EwcerRequest;
}(utils_1.SpeakeasyBase));
exports.EwcerRequest = EwcerRequest;
var EwcerResponse = /** @class */ (function (_super) {
    __extends(EwcerResponse, _super);
    function EwcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EwcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EwcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ewcer400ApplicationJson)
    ], EwcerResponse.prototype, "ewcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ewcer401ApplicationJson)
    ], EwcerResponse.prototype, "ewcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ewcer404ApplicationJson)
    ], EwcerResponse.prototype, "ewcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ewcer500ApplicationJson)
    ], EwcerResponse.prototype, "ewcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ewcer502ApplicationJson)
    ], EwcerResponse.prototype, "ewcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ewcer503ApplicationJson)
    ], EwcerResponse.prototype, "ewcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ewcer504ApplicationJson)
    ], EwcerResponse.prototype, "ewcer504ApplicationJSONObject", void 0);
    return EwcerResponse;
}(utils_1.SpeakeasyBase));
exports.EwcerResponse = EwcerResponse;
