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
exports.MutanResponse = exports.MutanRequest = exports.Mutan504ApplicationJson = exports.Mutan504ApplicationJsonErrorDescriptionEnum = exports.Mutan504ApplicationJsonErrorEnum = exports.Mutan503ApplicationJson = exports.Mutan503ApplicationJsonErrorDescriptionEnum = exports.Mutan503ApplicationJsonErrorEnum = exports.Mutan502ApplicationJson = exports.Mutan502ApplicationJsonErrorDescriptionEnum = exports.Mutan502ApplicationJsonErrorEnum = exports.Mutan500ApplicationJson = exports.Mutan500ApplicationJsonErrorDescriptionEnum = exports.Mutan500ApplicationJsonErrorEnum = exports.Mutan404ApplicationJson = exports.Mutan404ApplicationJsonErrorDescriptionEnum = exports.Mutan404ApplicationJsonErrorEnum = exports.Mutan401ApplicationJson = exports.Mutan401ApplicationJsonErrorDescriptionEnum = exports.Mutan401ApplicationJsonErrorEnum = exports.Mutan400ApplicationJson = exports.Mutan400ApplicationJsonErrorDescriptionEnum = exports.Mutan400ApplicationJsonErrorEnum = exports.MutanSecurity = exports.MutanRequestBody = exports.MutanRequestBodyFormatEnum = exports.MutanRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MutanRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(MutanRequestBodyCertificateParameters, _super);
    function MutanRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DocumentNumber" }),
        __metadata("design:type", String)
    ], MutanRequestBodyCertificateParameters.prototype, "documentNumber", void 0);
    return MutanRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.MutanRequestBodyCertificateParameters = MutanRequestBodyCertificateParameters;
var MutanRequestBodyFormatEnum;
(function (MutanRequestBodyFormatEnum) {
    MutanRequestBodyFormatEnum["Xml"] = "xml";
    MutanRequestBodyFormatEnum["Pdf"] = "pdf";
})(MutanRequestBodyFormatEnum = exports.MutanRequestBodyFormatEnum || (exports.MutanRequestBodyFormatEnum = {}));
var MutanRequestBody = /** @class */ (function (_super) {
    __extends(MutanRequestBody, _super);
    function MutanRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", MutanRequestBodyCertificateParameters)
    ], MutanRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], MutanRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], MutanRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], MutanRequestBody.prototype, "txnId", void 0);
    return MutanRequestBody;
}(utils_1.SpeakeasyBase));
exports.MutanRequestBody = MutanRequestBody;
var MutanSecurity = /** @class */ (function (_super) {
    __extends(MutanSecurity, _super);
    function MutanSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], MutanSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], MutanSecurity.prototype, "clientId", void 0);
    return MutanSecurity;
}(utils_1.SpeakeasyBase));
exports.MutanSecurity = MutanSecurity;
var Mutan400ApplicationJsonErrorEnum;
(function (Mutan400ApplicationJsonErrorEnum) {
    Mutan400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Mutan400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Mutan400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Mutan400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Mutan400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Mutan400ApplicationJsonErrorEnum = exports.Mutan400ApplicationJsonErrorEnum || (exports.Mutan400ApplicationJsonErrorEnum = {}));
var Mutan400ApplicationJsonErrorDescriptionEnum;
(function (Mutan400ApplicationJsonErrorDescriptionEnum) {
    Mutan400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Mutan400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Mutan400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Mutan400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Mutan400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Mutan400ApplicationJsonErrorDescriptionEnum = exports.Mutan400ApplicationJsonErrorDescriptionEnum || (exports.Mutan400ApplicationJsonErrorDescriptionEnum = {}));
var Mutan400ApplicationJson = /** @class */ (function (_super) {
    __extends(Mutan400ApplicationJson, _super);
    function Mutan400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mutan400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mutan400ApplicationJson.prototype, "errorDescription", void 0);
    return Mutan400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mutan400ApplicationJson = Mutan400ApplicationJson;
var Mutan401ApplicationJsonErrorEnum;
(function (Mutan401ApplicationJsonErrorEnum) {
    Mutan401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Mutan401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Mutan401ApplicationJsonErrorEnum = exports.Mutan401ApplicationJsonErrorEnum || (exports.Mutan401ApplicationJsonErrorEnum = {}));
var Mutan401ApplicationJsonErrorDescriptionEnum;
(function (Mutan401ApplicationJsonErrorDescriptionEnum) {
    Mutan401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Mutan401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Mutan401ApplicationJsonErrorDescriptionEnum = exports.Mutan401ApplicationJsonErrorDescriptionEnum || (exports.Mutan401ApplicationJsonErrorDescriptionEnum = {}));
var Mutan401ApplicationJson = /** @class */ (function (_super) {
    __extends(Mutan401ApplicationJson, _super);
    function Mutan401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mutan401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mutan401ApplicationJson.prototype, "errorDescription", void 0);
    return Mutan401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mutan401ApplicationJson = Mutan401ApplicationJson;
var Mutan404ApplicationJsonErrorEnum;
(function (Mutan404ApplicationJsonErrorEnum) {
    Mutan404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Mutan404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Mutan404ApplicationJsonErrorEnum = exports.Mutan404ApplicationJsonErrorEnum || (exports.Mutan404ApplicationJsonErrorEnum = {}));
var Mutan404ApplicationJsonErrorDescriptionEnum;
(function (Mutan404ApplicationJsonErrorDescriptionEnum) {
    Mutan404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Mutan404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Mutan404ApplicationJsonErrorDescriptionEnum = exports.Mutan404ApplicationJsonErrorDescriptionEnum || (exports.Mutan404ApplicationJsonErrorDescriptionEnum = {}));
var Mutan404ApplicationJson = /** @class */ (function (_super) {
    __extends(Mutan404ApplicationJson, _super);
    function Mutan404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mutan404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mutan404ApplicationJson.prototype, "errorDescription", void 0);
    return Mutan404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mutan404ApplicationJson = Mutan404ApplicationJson;
var Mutan500ApplicationJsonErrorEnum;
(function (Mutan500ApplicationJsonErrorEnum) {
    Mutan500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Mutan500ApplicationJsonErrorEnum = exports.Mutan500ApplicationJsonErrorEnum || (exports.Mutan500ApplicationJsonErrorEnum = {}));
var Mutan500ApplicationJsonErrorDescriptionEnum;
(function (Mutan500ApplicationJsonErrorDescriptionEnum) {
    Mutan500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Mutan500ApplicationJsonErrorDescriptionEnum = exports.Mutan500ApplicationJsonErrorDescriptionEnum || (exports.Mutan500ApplicationJsonErrorDescriptionEnum = {}));
var Mutan500ApplicationJson = /** @class */ (function (_super) {
    __extends(Mutan500ApplicationJson, _super);
    function Mutan500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mutan500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mutan500ApplicationJson.prototype, "errorDescription", void 0);
    return Mutan500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mutan500ApplicationJson = Mutan500ApplicationJson;
var Mutan502ApplicationJsonErrorEnum;
(function (Mutan502ApplicationJsonErrorEnum) {
    Mutan502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Mutan502ApplicationJsonErrorEnum = exports.Mutan502ApplicationJsonErrorEnum || (exports.Mutan502ApplicationJsonErrorEnum = {}));
var Mutan502ApplicationJsonErrorDescriptionEnum;
(function (Mutan502ApplicationJsonErrorDescriptionEnum) {
    Mutan502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Mutan502ApplicationJsonErrorDescriptionEnum = exports.Mutan502ApplicationJsonErrorDescriptionEnum || (exports.Mutan502ApplicationJsonErrorDescriptionEnum = {}));
var Mutan502ApplicationJson = /** @class */ (function (_super) {
    __extends(Mutan502ApplicationJson, _super);
    function Mutan502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mutan502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mutan502ApplicationJson.prototype, "errorDescription", void 0);
    return Mutan502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mutan502ApplicationJson = Mutan502ApplicationJson;
var Mutan503ApplicationJsonErrorEnum;
(function (Mutan503ApplicationJsonErrorEnum) {
    Mutan503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Mutan503ApplicationJsonErrorEnum = exports.Mutan503ApplicationJsonErrorEnum || (exports.Mutan503ApplicationJsonErrorEnum = {}));
var Mutan503ApplicationJsonErrorDescriptionEnum;
(function (Mutan503ApplicationJsonErrorDescriptionEnum) {
    Mutan503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Mutan503ApplicationJsonErrorDescriptionEnum = exports.Mutan503ApplicationJsonErrorDescriptionEnum || (exports.Mutan503ApplicationJsonErrorDescriptionEnum = {}));
var Mutan503ApplicationJson = /** @class */ (function (_super) {
    __extends(Mutan503ApplicationJson, _super);
    function Mutan503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mutan503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mutan503ApplicationJson.prototype, "errorDescription", void 0);
    return Mutan503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mutan503ApplicationJson = Mutan503ApplicationJson;
var Mutan504ApplicationJsonErrorEnum;
(function (Mutan504ApplicationJsonErrorEnum) {
    Mutan504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Mutan504ApplicationJsonErrorEnum = exports.Mutan504ApplicationJsonErrorEnum || (exports.Mutan504ApplicationJsonErrorEnum = {}));
var Mutan504ApplicationJsonErrorDescriptionEnum;
(function (Mutan504ApplicationJsonErrorDescriptionEnum) {
    Mutan504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Mutan504ApplicationJsonErrorDescriptionEnum = exports.Mutan504ApplicationJsonErrorDescriptionEnum || (exports.Mutan504ApplicationJsonErrorDescriptionEnum = {}));
var Mutan504ApplicationJson = /** @class */ (function (_super) {
    __extends(Mutan504ApplicationJson, _super);
    function Mutan504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mutan504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mutan504ApplicationJson.prototype, "errorDescription", void 0);
    return Mutan504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mutan504ApplicationJson = Mutan504ApplicationJson;
var MutanRequest = /** @class */ (function (_super) {
    __extends(MutanRequest, _super);
    function MutanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", MutanRequestBody)
    ], MutanRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MutanSecurity)
    ], MutanRequest.prototype, "security", void 0);
    return MutanRequest;
}(utils_1.SpeakeasyBase));
exports.MutanRequest = MutanRequest;
var MutanResponse = /** @class */ (function (_super) {
    __extends(MutanResponse, _super);
    function MutanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], MutanResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MutanResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MutanResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mutan400ApplicationJson)
    ], MutanResponse.prototype, "mutan400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mutan401ApplicationJson)
    ], MutanResponse.prototype, "mutan401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mutan404ApplicationJson)
    ], MutanResponse.prototype, "mutan404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mutan500ApplicationJson)
    ], MutanResponse.prototype, "mutan500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mutan502ApplicationJson)
    ], MutanResponse.prototype, "mutan502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mutan503ApplicationJson)
    ], MutanResponse.prototype, "mutan503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mutan504ApplicationJson)
    ], MutanResponse.prototype, "mutan504ApplicationJSONObject", void 0);
    return MutanResponse;
}(utils_1.SpeakeasyBase));
exports.MutanResponse = MutanResponse;
