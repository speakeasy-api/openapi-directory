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
exports.AgcerResponse = exports.AgcerRequest = exports.Agcer504ApplicationJson = exports.Agcer504ApplicationJsonErrorDescriptionEnum = exports.Agcer504ApplicationJsonErrorEnum = exports.Agcer503ApplicationJson = exports.Agcer503ApplicationJsonErrorDescriptionEnum = exports.Agcer503ApplicationJsonErrorEnum = exports.Agcer502ApplicationJson = exports.Agcer502ApplicationJsonErrorDescriptionEnum = exports.Agcer502ApplicationJsonErrorEnum = exports.Agcer500ApplicationJson = exports.Agcer500ApplicationJsonErrorDescriptionEnum = exports.Agcer500ApplicationJsonErrorEnum = exports.Agcer404ApplicationJson = exports.Agcer404ApplicationJsonErrorDescriptionEnum = exports.Agcer404ApplicationJsonErrorEnum = exports.Agcer401ApplicationJson = exports.Agcer401ApplicationJsonErrorDescriptionEnum = exports.Agcer401ApplicationJsonErrorEnum = exports.Agcer400ApplicationJson = exports.Agcer400ApplicationJsonErrorDescriptionEnum = exports.Agcer400ApplicationJsonErrorEnum = exports.AgcerSecurity = exports.AgcerRequestBody = exports.AgcerRequestBodyFormatEnum = exports.AgcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AgcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(AgcerRequestBodyCertificateParameters, _super);
    function AgcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], AgcerRequestBodyCertificateParameters.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], AgcerRequestBodyCertificateParameters.prototype, "refNo", void 0);
    return AgcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.AgcerRequestBodyCertificateParameters = AgcerRequestBodyCertificateParameters;
var AgcerRequestBodyFormatEnum;
(function (AgcerRequestBodyFormatEnum) {
    AgcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(AgcerRequestBodyFormatEnum = exports.AgcerRequestBodyFormatEnum || (exports.AgcerRequestBodyFormatEnum = {}));
var AgcerRequestBody = /** @class */ (function (_super) {
    __extends(AgcerRequestBody, _super);
    function AgcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", AgcerRequestBodyCertificateParameters)
    ], AgcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], AgcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], AgcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], AgcerRequestBody.prototype, "txnId", void 0);
    return AgcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.AgcerRequestBody = AgcerRequestBody;
var AgcerSecurity = /** @class */ (function (_super) {
    __extends(AgcerSecurity, _super);
    function AgcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], AgcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], AgcerSecurity.prototype, "clientId", void 0);
    return AgcerSecurity;
}(utils_1.SpeakeasyBase));
exports.AgcerSecurity = AgcerSecurity;
var Agcer400ApplicationJsonErrorEnum;
(function (Agcer400ApplicationJsonErrorEnum) {
    Agcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Agcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Agcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Agcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Agcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Agcer400ApplicationJsonErrorEnum = exports.Agcer400ApplicationJsonErrorEnum || (exports.Agcer400ApplicationJsonErrorEnum = {}));
var Agcer400ApplicationJsonErrorDescriptionEnum;
(function (Agcer400ApplicationJsonErrorDescriptionEnum) {
    Agcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Agcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Agcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Agcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Agcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Agcer400ApplicationJsonErrorDescriptionEnum = exports.Agcer400ApplicationJsonErrorDescriptionEnum || (exports.Agcer400ApplicationJsonErrorDescriptionEnum = {}));
var Agcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Agcer400ApplicationJson, _super);
    function Agcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Agcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Agcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Agcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Agcer400ApplicationJson = Agcer400ApplicationJson;
var Agcer401ApplicationJsonErrorEnum;
(function (Agcer401ApplicationJsonErrorEnum) {
    Agcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Agcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Agcer401ApplicationJsonErrorEnum = exports.Agcer401ApplicationJsonErrorEnum || (exports.Agcer401ApplicationJsonErrorEnum = {}));
var Agcer401ApplicationJsonErrorDescriptionEnum;
(function (Agcer401ApplicationJsonErrorDescriptionEnum) {
    Agcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Agcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Agcer401ApplicationJsonErrorDescriptionEnum = exports.Agcer401ApplicationJsonErrorDescriptionEnum || (exports.Agcer401ApplicationJsonErrorDescriptionEnum = {}));
var Agcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Agcer401ApplicationJson, _super);
    function Agcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Agcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Agcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Agcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Agcer401ApplicationJson = Agcer401ApplicationJson;
var Agcer404ApplicationJsonErrorEnum;
(function (Agcer404ApplicationJsonErrorEnum) {
    Agcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Agcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Agcer404ApplicationJsonErrorEnum = exports.Agcer404ApplicationJsonErrorEnum || (exports.Agcer404ApplicationJsonErrorEnum = {}));
var Agcer404ApplicationJsonErrorDescriptionEnum;
(function (Agcer404ApplicationJsonErrorDescriptionEnum) {
    Agcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Agcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Agcer404ApplicationJsonErrorDescriptionEnum = exports.Agcer404ApplicationJsonErrorDescriptionEnum || (exports.Agcer404ApplicationJsonErrorDescriptionEnum = {}));
var Agcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Agcer404ApplicationJson, _super);
    function Agcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Agcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Agcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Agcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Agcer404ApplicationJson = Agcer404ApplicationJson;
var Agcer500ApplicationJsonErrorEnum;
(function (Agcer500ApplicationJsonErrorEnum) {
    Agcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Agcer500ApplicationJsonErrorEnum = exports.Agcer500ApplicationJsonErrorEnum || (exports.Agcer500ApplicationJsonErrorEnum = {}));
var Agcer500ApplicationJsonErrorDescriptionEnum;
(function (Agcer500ApplicationJsonErrorDescriptionEnum) {
    Agcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Agcer500ApplicationJsonErrorDescriptionEnum = exports.Agcer500ApplicationJsonErrorDescriptionEnum || (exports.Agcer500ApplicationJsonErrorDescriptionEnum = {}));
var Agcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Agcer500ApplicationJson, _super);
    function Agcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Agcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Agcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Agcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Agcer500ApplicationJson = Agcer500ApplicationJson;
var Agcer502ApplicationJsonErrorEnum;
(function (Agcer502ApplicationJsonErrorEnum) {
    Agcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Agcer502ApplicationJsonErrorEnum = exports.Agcer502ApplicationJsonErrorEnum || (exports.Agcer502ApplicationJsonErrorEnum = {}));
var Agcer502ApplicationJsonErrorDescriptionEnum;
(function (Agcer502ApplicationJsonErrorDescriptionEnum) {
    Agcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Agcer502ApplicationJsonErrorDescriptionEnum = exports.Agcer502ApplicationJsonErrorDescriptionEnum || (exports.Agcer502ApplicationJsonErrorDescriptionEnum = {}));
var Agcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Agcer502ApplicationJson, _super);
    function Agcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Agcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Agcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Agcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Agcer502ApplicationJson = Agcer502ApplicationJson;
var Agcer503ApplicationJsonErrorEnum;
(function (Agcer503ApplicationJsonErrorEnum) {
    Agcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Agcer503ApplicationJsonErrorEnum = exports.Agcer503ApplicationJsonErrorEnum || (exports.Agcer503ApplicationJsonErrorEnum = {}));
var Agcer503ApplicationJsonErrorDescriptionEnum;
(function (Agcer503ApplicationJsonErrorDescriptionEnum) {
    Agcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Agcer503ApplicationJsonErrorDescriptionEnum = exports.Agcer503ApplicationJsonErrorDescriptionEnum || (exports.Agcer503ApplicationJsonErrorDescriptionEnum = {}));
var Agcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Agcer503ApplicationJson, _super);
    function Agcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Agcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Agcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Agcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Agcer503ApplicationJson = Agcer503ApplicationJson;
var Agcer504ApplicationJsonErrorEnum;
(function (Agcer504ApplicationJsonErrorEnum) {
    Agcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Agcer504ApplicationJsonErrorEnum = exports.Agcer504ApplicationJsonErrorEnum || (exports.Agcer504ApplicationJsonErrorEnum = {}));
var Agcer504ApplicationJsonErrorDescriptionEnum;
(function (Agcer504ApplicationJsonErrorDescriptionEnum) {
    Agcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Agcer504ApplicationJsonErrorDescriptionEnum = exports.Agcer504ApplicationJsonErrorDescriptionEnum || (exports.Agcer504ApplicationJsonErrorDescriptionEnum = {}));
var Agcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Agcer504ApplicationJson, _super);
    function Agcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Agcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Agcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Agcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Agcer504ApplicationJson = Agcer504ApplicationJson;
var AgcerRequest = /** @class */ (function (_super) {
    __extends(AgcerRequest, _super);
    function AgcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AgcerRequestBody)
    ], AgcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AgcerSecurity)
    ], AgcerRequest.prototype, "security", void 0);
    return AgcerRequest;
}(utils_1.SpeakeasyBase));
exports.AgcerRequest = AgcerRequest;
var AgcerResponse = /** @class */ (function (_super) {
    __extends(AgcerResponse, _super);
    function AgcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AgcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AgcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Agcer400ApplicationJson)
    ], AgcerResponse.prototype, "agcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Agcer401ApplicationJson)
    ], AgcerResponse.prototype, "agcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Agcer404ApplicationJson)
    ], AgcerResponse.prototype, "agcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Agcer500ApplicationJson)
    ], AgcerResponse.prototype, "agcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Agcer502ApplicationJson)
    ], AgcerResponse.prototype, "agcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Agcer503ApplicationJson)
    ], AgcerResponse.prototype, "agcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Agcer504ApplicationJson)
    ], AgcerResponse.prototype, "agcer504ApplicationJSONObject", void 0);
    return AgcerResponse;
}(utils_1.SpeakeasyBase));
exports.AgcerResponse = AgcerResponse;
