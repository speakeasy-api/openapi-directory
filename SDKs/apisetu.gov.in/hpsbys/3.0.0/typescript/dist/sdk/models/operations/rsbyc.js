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
exports.RsbycResponse = exports.RsbycRequest = exports.Rsbyc504ApplicationJson = exports.Rsbyc504ApplicationJsonErrorDescriptionEnum = exports.Rsbyc504ApplicationJsonErrorEnum = exports.Rsbyc503ApplicationJson = exports.Rsbyc503ApplicationJsonErrorDescriptionEnum = exports.Rsbyc503ApplicationJsonErrorEnum = exports.Rsbyc502ApplicationJson = exports.Rsbyc502ApplicationJsonErrorDescriptionEnum = exports.Rsbyc502ApplicationJsonErrorEnum = exports.Rsbyc500ApplicationJson = exports.Rsbyc500ApplicationJsonErrorDescriptionEnum = exports.Rsbyc500ApplicationJsonErrorEnum = exports.Rsbyc404ApplicationJson = exports.Rsbyc404ApplicationJsonErrorDescriptionEnum = exports.Rsbyc404ApplicationJsonErrorEnum = exports.Rsbyc401ApplicationJson = exports.Rsbyc401ApplicationJsonErrorDescriptionEnum = exports.Rsbyc401ApplicationJsonErrorEnum = exports.Rsbyc400ApplicationJson = exports.Rsbyc400ApplicationJsonErrorDescriptionEnum = exports.Rsbyc400ApplicationJsonErrorEnum = exports.RsbycSecurity = exports.RsbycRequestBody = exports.RsbycRequestBodyFormatEnum = exports.RsbycRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RsbycRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(RsbycRequestBodyCertificateParameters, _super);
    function RsbycRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], RsbycRequestBodyCertificateParameters.prototype, "uid", void 0);
    return RsbycRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.RsbycRequestBodyCertificateParameters = RsbycRequestBodyCertificateParameters;
var RsbycRequestBodyFormatEnum;
(function (RsbycRequestBodyFormatEnum) {
    RsbycRequestBodyFormatEnum["Pdf"] = "pdf";
})(RsbycRequestBodyFormatEnum = exports.RsbycRequestBodyFormatEnum || (exports.RsbycRequestBodyFormatEnum = {}));
var RsbycRequestBody = /** @class */ (function (_super) {
    __extends(RsbycRequestBody, _super);
    function RsbycRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", RsbycRequestBodyCertificateParameters)
    ], RsbycRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], RsbycRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], RsbycRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], RsbycRequestBody.prototype, "txnId", void 0);
    return RsbycRequestBody;
}(utils_1.SpeakeasyBase));
exports.RsbycRequestBody = RsbycRequestBody;
var RsbycSecurity = /** @class */ (function (_super) {
    __extends(RsbycSecurity, _super);
    function RsbycSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], RsbycSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], RsbycSecurity.prototype, "clientId", void 0);
    return RsbycSecurity;
}(utils_1.SpeakeasyBase));
exports.RsbycSecurity = RsbycSecurity;
var Rsbyc400ApplicationJsonErrorEnum;
(function (Rsbyc400ApplicationJsonErrorEnum) {
    Rsbyc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Rsbyc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Rsbyc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Rsbyc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Rsbyc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Rsbyc400ApplicationJsonErrorEnum = exports.Rsbyc400ApplicationJsonErrorEnum || (exports.Rsbyc400ApplicationJsonErrorEnum = {}));
var Rsbyc400ApplicationJsonErrorDescriptionEnum;
(function (Rsbyc400ApplicationJsonErrorDescriptionEnum) {
    Rsbyc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Rsbyc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Rsbyc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Rsbyc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Rsbyc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Rsbyc400ApplicationJsonErrorDescriptionEnum = exports.Rsbyc400ApplicationJsonErrorDescriptionEnum || (exports.Rsbyc400ApplicationJsonErrorDescriptionEnum = {}));
var Rsbyc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Rsbyc400ApplicationJson, _super);
    function Rsbyc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rsbyc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rsbyc400ApplicationJson.prototype, "errorDescription", void 0);
    return Rsbyc400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rsbyc400ApplicationJson = Rsbyc400ApplicationJson;
var Rsbyc401ApplicationJsonErrorEnum;
(function (Rsbyc401ApplicationJsonErrorEnum) {
    Rsbyc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Rsbyc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Rsbyc401ApplicationJsonErrorEnum = exports.Rsbyc401ApplicationJsonErrorEnum || (exports.Rsbyc401ApplicationJsonErrorEnum = {}));
var Rsbyc401ApplicationJsonErrorDescriptionEnum;
(function (Rsbyc401ApplicationJsonErrorDescriptionEnum) {
    Rsbyc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Rsbyc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Rsbyc401ApplicationJsonErrorDescriptionEnum = exports.Rsbyc401ApplicationJsonErrorDescriptionEnum || (exports.Rsbyc401ApplicationJsonErrorDescriptionEnum = {}));
var Rsbyc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Rsbyc401ApplicationJson, _super);
    function Rsbyc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rsbyc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rsbyc401ApplicationJson.prototype, "errorDescription", void 0);
    return Rsbyc401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rsbyc401ApplicationJson = Rsbyc401ApplicationJson;
var Rsbyc404ApplicationJsonErrorEnum;
(function (Rsbyc404ApplicationJsonErrorEnum) {
    Rsbyc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Rsbyc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Rsbyc404ApplicationJsonErrorEnum = exports.Rsbyc404ApplicationJsonErrorEnum || (exports.Rsbyc404ApplicationJsonErrorEnum = {}));
var Rsbyc404ApplicationJsonErrorDescriptionEnum;
(function (Rsbyc404ApplicationJsonErrorDescriptionEnum) {
    Rsbyc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Rsbyc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Rsbyc404ApplicationJsonErrorDescriptionEnum = exports.Rsbyc404ApplicationJsonErrorDescriptionEnum || (exports.Rsbyc404ApplicationJsonErrorDescriptionEnum = {}));
var Rsbyc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Rsbyc404ApplicationJson, _super);
    function Rsbyc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rsbyc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rsbyc404ApplicationJson.prototype, "errorDescription", void 0);
    return Rsbyc404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rsbyc404ApplicationJson = Rsbyc404ApplicationJson;
var Rsbyc500ApplicationJsonErrorEnum;
(function (Rsbyc500ApplicationJsonErrorEnum) {
    Rsbyc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Rsbyc500ApplicationJsonErrorEnum = exports.Rsbyc500ApplicationJsonErrorEnum || (exports.Rsbyc500ApplicationJsonErrorEnum = {}));
var Rsbyc500ApplicationJsonErrorDescriptionEnum;
(function (Rsbyc500ApplicationJsonErrorDescriptionEnum) {
    Rsbyc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Rsbyc500ApplicationJsonErrorDescriptionEnum = exports.Rsbyc500ApplicationJsonErrorDescriptionEnum || (exports.Rsbyc500ApplicationJsonErrorDescriptionEnum = {}));
var Rsbyc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Rsbyc500ApplicationJson, _super);
    function Rsbyc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rsbyc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rsbyc500ApplicationJson.prototype, "errorDescription", void 0);
    return Rsbyc500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rsbyc500ApplicationJson = Rsbyc500ApplicationJson;
var Rsbyc502ApplicationJsonErrorEnum;
(function (Rsbyc502ApplicationJsonErrorEnum) {
    Rsbyc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Rsbyc502ApplicationJsonErrorEnum = exports.Rsbyc502ApplicationJsonErrorEnum || (exports.Rsbyc502ApplicationJsonErrorEnum = {}));
var Rsbyc502ApplicationJsonErrorDescriptionEnum;
(function (Rsbyc502ApplicationJsonErrorDescriptionEnum) {
    Rsbyc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Rsbyc502ApplicationJsonErrorDescriptionEnum = exports.Rsbyc502ApplicationJsonErrorDescriptionEnum || (exports.Rsbyc502ApplicationJsonErrorDescriptionEnum = {}));
var Rsbyc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Rsbyc502ApplicationJson, _super);
    function Rsbyc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rsbyc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rsbyc502ApplicationJson.prototype, "errorDescription", void 0);
    return Rsbyc502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rsbyc502ApplicationJson = Rsbyc502ApplicationJson;
var Rsbyc503ApplicationJsonErrorEnum;
(function (Rsbyc503ApplicationJsonErrorEnum) {
    Rsbyc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Rsbyc503ApplicationJsonErrorEnum = exports.Rsbyc503ApplicationJsonErrorEnum || (exports.Rsbyc503ApplicationJsonErrorEnum = {}));
var Rsbyc503ApplicationJsonErrorDescriptionEnum;
(function (Rsbyc503ApplicationJsonErrorDescriptionEnum) {
    Rsbyc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Rsbyc503ApplicationJsonErrorDescriptionEnum = exports.Rsbyc503ApplicationJsonErrorDescriptionEnum || (exports.Rsbyc503ApplicationJsonErrorDescriptionEnum = {}));
var Rsbyc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Rsbyc503ApplicationJson, _super);
    function Rsbyc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rsbyc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rsbyc503ApplicationJson.prototype, "errorDescription", void 0);
    return Rsbyc503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rsbyc503ApplicationJson = Rsbyc503ApplicationJson;
var Rsbyc504ApplicationJsonErrorEnum;
(function (Rsbyc504ApplicationJsonErrorEnum) {
    Rsbyc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Rsbyc504ApplicationJsonErrorEnum = exports.Rsbyc504ApplicationJsonErrorEnum || (exports.Rsbyc504ApplicationJsonErrorEnum = {}));
var Rsbyc504ApplicationJsonErrorDescriptionEnum;
(function (Rsbyc504ApplicationJsonErrorDescriptionEnum) {
    Rsbyc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Rsbyc504ApplicationJsonErrorDescriptionEnum = exports.Rsbyc504ApplicationJsonErrorDescriptionEnum || (exports.Rsbyc504ApplicationJsonErrorDescriptionEnum = {}));
var Rsbyc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Rsbyc504ApplicationJson, _super);
    function Rsbyc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rsbyc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rsbyc504ApplicationJson.prototype, "errorDescription", void 0);
    return Rsbyc504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rsbyc504ApplicationJson = Rsbyc504ApplicationJson;
var RsbycRequest = /** @class */ (function (_super) {
    __extends(RsbycRequest, _super);
    function RsbycRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", RsbycRequestBody)
    ], RsbycRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RsbycSecurity)
    ], RsbycRequest.prototype, "security", void 0);
    return RsbycRequest;
}(utils_1.SpeakeasyBase));
exports.RsbycRequest = RsbycRequest;
var RsbycResponse = /** @class */ (function (_super) {
    __extends(RsbycResponse, _super);
    function RsbycResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RsbycResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RsbycResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rsbyc400ApplicationJson)
    ], RsbycResponse.prototype, "rsbyc400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rsbyc401ApplicationJson)
    ], RsbycResponse.prototype, "rsbyc401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rsbyc404ApplicationJson)
    ], RsbycResponse.prototype, "rsbyc404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rsbyc500ApplicationJson)
    ], RsbycResponse.prototype, "rsbyc500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rsbyc502ApplicationJson)
    ], RsbycResponse.prototype, "rsbyc502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rsbyc503ApplicationJson)
    ], RsbycResponse.prototype, "rsbyc503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rsbyc504ApplicationJson)
    ], RsbycResponse.prototype, "rsbyc504ApplicationJSONObject", void 0);
    return RsbycResponse;
}(utils_1.SpeakeasyBase));
exports.RsbycResponse = RsbycResponse;
