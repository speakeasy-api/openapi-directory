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
exports.SmcerResponse = exports.SmcerRequest = exports.Smcer504ApplicationJson = exports.Smcer504ApplicationJsonErrorDescriptionEnum = exports.Smcer504ApplicationJsonErrorEnum = exports.Smcer503ApplicationJson = exports.Smcer503ApplicationJsonErrorDescriptionEnum = exports.Smcer503ApplicationJsonErrorEnum = exports.Smcer502ApplicationJson = exports.Smcer502ApplicationJsonErrorDescriptionEnum = exports.Smcer502ApplicationJsonErrorEnum = exports.Smcer500ApplicationJson = exports.Smcer500ApplicationJsonErrorDescriptionEnum = exports.Smcer500ApplicationJsonErrorEnum = exports.Smcer404ApplicationJson = exports.Smcer404ApplicationJsonErrorDescriptionEnum = exports.Smcer404ApplicationJsonErrorEnum = exports.Smcer401ApplicationJson = exports.Smcer401ApplicationJsonErrorDescriptionEnum = exports.Smcer401ApplicationJsonErrorEnum = exports.Smcer400ApplicationJson = exports.Smcer400ApplicationJsonErrorDescriptionEnum = exports.Smcer400ApplicationJsonErrorEnum = exports.SmcerSecurity = exports.SmcerRequestBody = exports.SmcerRequestBodyFormatEnum = exports.SmcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SmcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(SmcerRequestBodyCertificateParameters, _super);
    function SmcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], SmcerRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], SmcerRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return SmcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.SmcerRequestBodyCertificateParameters = SmcerRequestBodyCertificateParameters;
var SmcerRequestBodyFormatEnum;
(function (SmcerRequestBodyFormatEnum) {
    SmcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(SmcerRequestBodyFormatEnum = exports.SmcerRequestBodyFormatEnum || (exports.SmcerRequestBodyFormatEnum = {}));
var SmcerRequestBody = /** @class */ (function (_super) {
    __extends(SmcerRequestBody, _super);
    function SmcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", SmcerRequestBodyCertificateParameters)
    ], SmcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], SmcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SmcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], SmcerRequestBody.prototype, "txnId", void 0);
    return SmcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.SmcerRequestBody = SmcerRequestBody;
var SmcerSecurity = /** @class */ (function (_super) {
    __extends(SmcerSecurity, _super);
    function SmcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SmcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], SmcerSecurity.prototype, "clientId", void 0);
    return SmcerSecurity;
}(utils_1.SpeakeasyBase));
exports.SmcerSecurity = SmcerSecurity;
var Smcer400ApplicationJsonErrorEnum;
(function (Smcer400ApplicationJsonErrorEnum) {
    Smcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Smcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Smcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Smcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Smcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Smcer400ApplicationJsonErrorEnum = exports.Smcer400ApplicationJsonErrorEnum || (exports.Smcer400ApplicationJsonErrorEnum = {}));
var Smcer400ApplicationJsonErrorDescriptionEnum;
(function (Smcer400ApplicationJsonErrorDescriptionEnum) {
    Smcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Smcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Smcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Smcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Smcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Smcer400ApplicationJsonErrorDescriptionEnum = exports.Smcer400ApplicationJsonErrorDescriptionEnum || (exports.Smcer400ApplicationJsonErrorDescriptionEnum = {}));
var Smcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Smcer400ApplicationJson, _super);
    function Smcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Smcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Smcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Smcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Smcer400ApplicationJson = Smcer400ApplicationJson;
var Smcer401ApplicationJsonErrorEnum;
(function (Smcer401ApplicationJsonErrorEnum) {
    Smcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Smcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Smcer401ApplicationJsonErrorEnum = exports.Smcer401ApplicationJsonErrorEnum || (exports.Smcer401ApplicationJsonErrorEnum = {}));
var Smcer401ApplicationJsonErrorDescriptionEnum;
(function (Smcer401ApplicationJsonErrorDescriptionEnum) {
    Smcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Smcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Smcer401ApplicationJsonErrorDescriptionEnum = exports.Smcer401ApplicationJsonErrorDescriptionEnum || (exports.Smcer401ApplicationJsonErrorDescriptionEnum = {}));
var Smcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Smcer401ApplicationJson, _super);
    function Smcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Smcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Smcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Smcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Smcer401ApplicationJson = Smcer401ApplicationJson;
var Smcer404ApplicationJsonErrorEnum;
(function (Smcer404ApplicationJsonErrorEnum) {
    Smcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Smcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Smcer404ApplicationJsonErrorEnum = exports.Smcer404ApplicationJsonErrorEnum || (exports.Smcer404ApplicationJsonErrorEnum = {}));
var Smcer404ApplicationJsonErrorDescriptionEnum;
(function (Smcer404ApplicationJsonErrorDescriptionEnum) {
    Smcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Smcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Smcer404ApplicationJsonErrorDescriptionEnum = exports.Smcer404ApplicationJsonErrorDescriptionEnum || (exports.Smcer404ApplicationJsonErrorDescriptionEnum = {}));
var Smcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Smcer404ApplicationJson, _super);
    function Smcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Smcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Smcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Smcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Smcer404ApplicationJson = Smcer404ApplicationJson;
var Smcer500ApplicationJsonErrorEnum;
(function (Smcer500ApplicationJsonErrorEnum) {
    Smcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Smcer500ApplicationJsonErrorEnum = exports.Smcer500ApplicationJsonErrorEnum || (exports.Smcer500ApplicationJsonErrorEnum = {}));
var Smcer500ApplicationJsonErrorDescriptionEnum;
(function (Smcer500ApplicationJsonErrorDescriptionEnum) {
    Smcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Smcer500ApplicationJsonErrorDescriptionEnum = exports.Smcer500ApplicationJsonErrorDescriptionEnum || (exports.Smcer500ApplicationJsonErrorDescriptionEnum = {}));
var Smcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Smcer500ApplicationJson, _super);
    function Smcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Smcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Smcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Smcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Smcer500ApplicationJson = Smcer500ApplicationJson;
var Smcer502ApplicationJsonErrorEnum;
(function (Smcer502ApplicationJsonErrorEnum) {
    Smcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Smcer502ApplicationJsonErrorEnum = exports.Smcer502ApplicationJsonErrorEnum || (exports.Smcer502ApplicationJsonErrorEnum = {}));
var Smcer502ApplicationJsonErrorDescriptionEnum;
(function (Smcer502ApplicationJsonErrorDescriptionEnum) {
    Smcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Smcer502ApplicationJsonErrorDescriptionEnum = exports.Smcer502ApplicationJsonErrorDescriptionEnum || (exports.Smcer502ApplicationJsonErrorDescriptionEnum = {}));
var Smcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Smcer502ApplicationJson, _super);
    function Smcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Smcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Smcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Smcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Smcer502ApplicationJson = Smcer502ApplicationJson;
var Smcer503ApplicationJsonErrorEnum;
(function (Smcer503ApplicationJsonErrorEnum) {
    Smcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Smcer503ApplicationJsonErrorEnum = exports.Smcer503ApplicationJsonErrorEnum || (exports.Smcer503ApplicationJsonErrorEnum = {}));
var Smcer503ApplicationJsonErrorDescriptionEnum;
(function (Smcer503ApplicationJsonErrorDescriptionEnum) {
    Smcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Smcer503ApplicationJsonErrorDescriptionEnum = exports.Smcer503ApplicationJsonErrorDescriptionEnum || (exports.Smcer503ApplicationJsonErrorDescriptionEnum = {}));
var Smcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Smcer503ApplicationJson, _super);
    function Smcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Smcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Smcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Smcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Smcer503ApplicationJson = Smcer503ApplicationJson;
var Smcer504ApplicationJsonErrorEnum;
(function (Smcer504ApplicationJsonErrorEnum) {
    Smcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Smcer504ApplicationJsonErrorEnum = exports.Smcer504ApplicationJsonErrorEnum || (exports.Smcer504ApplicationJsonErrorEnum = {}));
var Smcer504ApplicationJsonErrorDescriptionEnum;
(function (Smcer504ApplicationJsonErrorDescriptionEnum) {
    Smcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Smcer504ApplicationJsonErrorDescriptionEnum = exports.Smcer504ApplicationJsonErrorDescriptionEnum || (exports.Smcer504ApplicationJsonErrorDescriptionEnum = {}));
var Smcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Smcer504ApplicationJson, _super);
    function Smcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Smcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Smcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Smcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Smcer504ApplicationJson = Smcer504ApplicationJson;
var SmcerRequest = /** @class */ (function (_super) {
    __extends(SmcerRequest, _super);
    function SmcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", SmcerRequestBody)
    ], SmcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SmcerSecurity)
    ], SmcerRequest.prototype, "security", void 0);
    return SmcerRequest;
}(utils_1.SpeakeasyBase));
exports.SmcerRequest = SmcerRequest;
var SmcerResponse = /** @class */ (function (_super) {
    __extends(SmcerResponse, _super);
    function SmcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SmcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SmcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Smcer400ApplicationJson)
    ], SmcerResponse.prototype, "smcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Smcer401ApplicationJson)
    ], SmcerResponse.prototype, "smcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Smcer404ApplicationJson)
    ], SmcerResponse.prototype, "smcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Smcer500ApplicationJson)
    ], SmcerResponse.prototype, "smcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Smcer502ApplicationJson)
    ], SmcerResponse.prototype, "smcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Smcer503ApplicationJson)
    ], SmcerResponse.prototype, "smcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Smcer504ApplicationJson)
    ], SmcerResponse.prototype, "smcer504ApplicationJSONObject", void 0);
    return SmcerResponse;
}(utils_1.SpeakeasyBase));
exports.SmcerResponse = SmcerResponse;
