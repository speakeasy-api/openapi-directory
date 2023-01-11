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
exports.RitinResponse = exports.RitinRequest = exports.Ritin504ApplicationJson = exports.Ritin504ApplicationJsonErrorDescriptionEnum = exports.Ritin504ApplicationJsonErrorEnum = exports.Ritin503ApplicationJson = exports.Ritin503ApplicationJsonErrorDescriptionEnum = exports.Ritin503ApplicationJsonErrorEnum = exports.Ritin502ApplicationJson = exports.Ritin502ApplicationJsonErrorDescriptionEnum = exports.Ritin502ApplicationJsonErrorEnum = exports.Ritin500ApplicationJson = exports.Ritin500ApplicationJsonErrorDescriptionEnum = exports.Ritin500ApplicationJsonErrorEnum = exports.Ritin404ApplicationJson = exports.Ritin404ApplicationJsonErrorDescriptionEnum = exports.Ritin404ApplicationJsonErrorEnum = exports.Ritin401ApplicationJson = exports.Ritin401ApplicationJsonErrorDescriptionEnum = exports.Ritin401ApplicationJsonErrorEnum = exports.Ritin400ApplicationJson = exports.Ritin400ApplicationJsonErrorDescriptionEnum = exports.Ritin400ApplicationJsonErrorEnum = exports.RitinSecurity = exports.RitinRequestBody = exports.RitinRequestBodyFormatEnum = exports.RitinRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RitinRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(RitinRequestBodyCertificateParameters, _super);
    function RitinRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], RitinRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], RitinRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return RitinRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.RitinRequestBodyCertificateParameters = RitinRequestBodyCertificateParameters;
var RitinRequestBodyFormatEnum;
(function (RitinRequestBodyFormatEnum) {
    RitinRequestBodyFormatEnum["Pdf"] = "pdf";
})(RitinRequestBodyFormatEnum = exports.RitinRequestBodyFormatEnum || (exports.RitinRequestBodyFormatEnum = {}));
var RitinRequestBody = /** @class */ (function (_super) {
    __extends(RitinRequestBody, _super);
    function RitinRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", RitinRequestBodyCertificateParameters)
    ], RitinRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], RitinRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], RitinRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], RitinRequestBody.prototype, "txnId", void 0);
    return RitinRequestBody;
}(utils_1.SpeakeasyBase));
exports.RitinRequestBody = RitinRequestBody;
var RitinSecurity = /** @class */ (function (_super) {
    __extends(RitinSecurity, _super);
    function RitinSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], RitinSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], RitinSecurity.prototype, "clientId", void 0);
    return RitinSecurity;
}(utils_1.SpeakeasyBase));
exports.RitinSecurity = RitinSecurity;
var Ritin400ApplicationJsonErrorEnum;
(function (Ritin400ApplicationJsonErrorEnum) {
    Ritin400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Ritin400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Ritin400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Ritin400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Ritin400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Ritin400ApplicationJsonErrorEnum = exports.Ritin400ApplicationJsonErrorEnum || (exports.Ritin400ApplicationJsonErrorEnum = {}));
var Ritin400ApplicationJsonErrorDescriptionEnum;
(function (Ritin400ApplicationJsonErrorDescriptionEnum) {
    Ritin400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Ritin400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Ritin400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Ritin400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Ritin400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Ritin400ApplicationJsonErrorDescriptionEnum = exports.Ritin400ApplicationJsonErrorDescriptionEnum || (exports.Ritin400ApplicationJsonErrorDescriptionEnum = {}));
var Ritin400ApplicationJson = /** @class */ (function (_super) {
    __extends(Ritin400ApplicationJson, _super);
    function Ritin400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ritin400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ritin400ApplicationJson.prototype, "errorDescription", void 0);
    return Ritin400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ritin400ApplicationJson = Ritin400ApplicationJson;
var Ritin401ApplicationJsonErrorEnum;
(function (Ritin401ApplicationJsonErrorEnum) {
    Ritin401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Ritin401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Ritin401ApplicationJsonErrorEnum = exports.Ritin401ApplicationJsonErrorEnum || (exports.Ritin401ApplicationJsonErrorEnum = {}));
var Ritin401ApplicationJsonErrorDescriptionEnum;
(function (Ritin401ApplicationJsonErrorDescriptionEnum) {
    Ritin401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Ritin401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Ritin401ApplicationJsonErrorDescriptionEnum = exports.Ritin401ApplicationJsonErrorDescriptionEnum || (exports.Ritin401ApplicationJsonErrorDescriptionEnum = {}));
var Ritin401ApplicationJson = /** @class */ (function (_super) {
    __extends(Ritin401ApplicationJson, _super);
    function Ritin401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ritin401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ritin401ApplicationJson.prototype, "errorDescription", void 0);
    return Ritin401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ritin401ApplicationJson = Ritin401ApplicationJson;
var Ritin404ApplicationJsonErrorEnum;
(function (Ritin404ApplicationJsonErrorEnum) {
    Ritin404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Ritin404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Ritin404ApplicationJsonErrorEnum = exports.Ritin404ApplicationJsonErrorEnum || (exports.Ritin404ApplicationJsonErrorEnum = {}));
var Ritin404ApplicationJsonErrorDescriptionEnum;
(function (Ritin404ApplicationJsonErrorDescriptionEnum) {
    Ritin404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Ritin404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Ritin404ApplicationJsonErrorDescriptionEnum = exports.Ritin404ApplicationJsonErrorDescriptionEnum || (exports.Ritin404ApplicationJsonErrorDescriptionEnum = {}));
var Ritin404ApplicationJson = /** @class */ (function (_super) {
    __extends(Ritin404ApplicationJson, _super);
    function Ritin404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ritin404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ritin404ApplicationJson.prototype, "errorDescription", void 0);
    return Ritin404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ritin404ApplicationJson = Ritin404ApplicationJson;
var Ritin500ApplicationJsonErrorEnum;
(function (Ritin500ApplicationJsonErrorEnum) {
    Ritin500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Ritin500ApplicationJsonErrorEnum = exports.Ritin500ApplicationJsonErrorEnum || (exports.Ritin500ApplicationJsonErrorEnum = {}));
var Ritin500ApplicationJsonErrorDescriptionEnum;
(function (Ritin500ApplicationJsonErrorDescriptionEnum) {
    Ritin500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Ritin500ApplicationJsonErrorDescriptionEnum = exports.Ritin500ApplicationJsonErrorDescriptionEnum || (exports.Ritin500ApplicationJsonErrorDescriptionEnum = {}));
var Ritin500ApplicationJson = /** @class */ (function (_super) {
    __extends(Ritin500ApplicationJson, _super);
    function Ritin500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ritin500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ritin500ApplicationJson.prototype, "errorDescription", void 0);
    return Ritin500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ritin500ApplicationJson = Ritin500ApplicationJson;
var Ritin502ApplicationJsonErrorEnum;
(function (Ritin502ApplicationJsonErrorEnum) {
    Ritin502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Ritin502ApplicationJsonErrorEnum = exports.Ritin502ApplicationJsonErrorEnum || (exports.Ritin502ApplicationJsonErrorEnum = {}));
var Ritin502ApplicationJsonErrorDescriptionEnum;
(function (Ritin502ApplicationJsonErrorDescriptionEnum) {
    Ritin502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Ritin502ApplicationJsonErrorDescriptionEnum = exports.Ritin502ApplicationJsonErrorDescriptionEnum || (exports.Ritin502ApplicationJsonErrorDescriptionEnum = {}));
var Ritin502ApplicationJson = /** @class */ (function (_super) {
    __extends(Ritin502ApplicationJson, _super);
    function Ritin502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ritin502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ritin502ApplicationJson.prototype, "errorDescription", void 0);
    return Ritin502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ritin502ApplicationJson = Ritin502ApplicationJson;
var Ritin503ApplicationJsonErrorEnum;
(function (Ritin503ApplicationJsonErrorEnum) {
    Ritin503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Ritin503ApplicationJsonErrorEnum = exports.Ritin503ApplicationJsonErrorEnum || (exports.Ritin503ApplicationJsonErrorEnum = {}));
var Ritin503ApplicationJsonErrorDescriptionEnum;
(function (Ritin503ApplicationJsonErrorDescriptionEnum) {
    Ritin503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Ritin503ApplicationJsonErrorDescriptionEnum = exports.Ritin503ApplicationJsonErrorDescriptionEnum || (exports.Ritin503ApplicationJsonErrorDescriptionEnum = {}));
var Ritin503ApplicationJson = /** @class */ (function (_super) {
    __extends(Ritin503ApplicationJson, _super);
    function Ritin503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ritin503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ritin503ApplicationJson.prototype, "errorDescription", void 0);
    return Ritin503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ritin503ApplicationJson = Ritin503ApplicationJson;
var Ritin504ApplicationJsonErrorEnum;
(function (Ritin504ApplicationJsonErrorEnum) {
    Ritin504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Ritin504ApplicationJsonErrorEnum = exports.Ritin504ApplicationJsonErrorEnum || (exports.Ritin504ApplicationJsonErrorEnum = {}));
var Ritin504ApplicationJsonErrorDescriptionEnum;
(function (Ritin504ApplicationJsonErrorDescriptionEnum) {
    Ritin504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Ritin504ApplicationJsonErrorDescriptionEnum = exports.Ritin504ApplicationJsonErrorDescriptionEnum || (exports.Ritin504ApplicationJsonErrorDescriptionEnum = {}));
var Ritin504ApplicationJson = /** @class */ (function (_super) {
    __extends(Ritin504ApplicationJson, _super);
    function Ritin504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ritin504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ritin504ApplicationJson.prototype, "errorDescription", void 0);
    return Ritin504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ritin504ApplicationJson = Ritin504ApplicationJson;
var RitinRequest = /** @class */ (function (_super) {
    __extends(RitinRequest, _super);
    function RitinRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", RitinRequestBody)
    ], RitinRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RitinSecurity)
    ], RitinRequest.prototype, "security", void 0);
    return RitinRequest;
}(utils_1.SpeakeasyBase));
exports.RitinRequest = RitinRequest;
var RitinResponse = /** @class */ (function (_super) {
    __extends(RitinResponse, _super);
    function RitinResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RitinResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RitinResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ritin400ApplicationJson)
    ], RitinResponse.prototype, "ritin400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ritin401ApplicationJson)
    ], RitinResponse.prototype, "ritin401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ritin404ApplicationJson)
    ], RitinResponse.prototype, "ritin404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ritin500ApplicationJson)
    ], RitinResponse.prototype, "ritin500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ritin502ApplicationJson)
    ], RitinResponse.prototype, "ritin502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ritin503ApplicationJson)
    ], RitinResponse.prototype, "ritin503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ritin504ApplicationJson)
    ], RitinResponse.prototype, "ritin504ApplicationJSONObject", void 0);
    return RitinResponse;
}(utils_1.SpeakeasyBase));
exports.RitinResponse = RitinResponse;
