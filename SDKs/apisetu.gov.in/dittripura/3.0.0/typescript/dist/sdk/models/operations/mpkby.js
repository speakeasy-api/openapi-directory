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
exports.MpkbyResponse = exports.MpkbyRequest = exports.Mpkby504ApplicationJson = exports.Mpkby504ApplicationJsonErrorDescriptionEnum = exports.Mpkby504ApplicationJsonErrorEnum = exports.Mpkby503ApplicationJson = exports.Mpkby503ApplicationJsonErrorDescriptionEnum = exports.Mpkby503ApplicationJsonErrorEnum = exports.Mpkby502ApplicationJson = exports.Mpkby502ApplicationJsonErrorDescriptionEnum = exports.Mpkby502ApplicationJsonErrorEnum = exports.Mpkby500ApplicationJson = exports.Mpkby500ApplicationJsonErrorDescriptionEnum = exports.Mpkby500ApplicationJsonErrorEnum = exports.Mpkby404ApplicationJson = exports.Mpkby404ApplicationJsonErrorDescriptionEnum = exports.Mpkby404ApplicationJsonErrorEnum = exports.Mpkby401ApplicationJson = exports.Mpkby401ApplicationJsonErrorDescriptionEnum = exports.Mpkby401ApplicationJsonErrorEnum = exports.Mpkby400ApplicationJson = exports.Mpkby400ApplicationJsonErrorDescriptionEnum = exports.Mpkby400ApplicationJsonErrorEnum = exports.MpkbySecurity = exports.MpkbyRequestBody = exports.MpkbyRequestBodyFormatEnum = exports.MpkbyRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MpkbyRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(MpkbyRequestBodyCertificateParameters, _super);
    function MpkbyRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], MpkbyRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], MpkbyRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return MpkbyRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.MpkbyRequestBodyCertificateParameters = MpkbyRequestBodyCertificateParameters;
var MpkbyRequestBodyFormatEnum;
(function (MpkbyRequestBodyFormatEnum) {
    MpkbyRequestBodyFormatEnum["Pdf"] = "pdf";
})(MpkbyRequestBodyFormatEnum = exports.MpkbyRequestBodyFormatEnum || (exports.MpkbyRequestBodyFormatEnum = {}));
var MpkbyRequestBody = /** @class */ (function (_super) {
    __extends(MpkbyRequestBody, _super);
    function MpkbyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", MpkbyRequestBodyCertificateParameters)
    ], MpkbyRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], MpkbyRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], MpkbyRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], MpkbyRequestBody.prototype, "txnId", void 0);
    return MpkbyRequestBody;
}(utils_1.SpeakeasyBase));
exports.MpkbyRequestBody = MpkbyRequestBody;
var MpkbySecurity = /** @class */ (function (_super) {
    __extends(MpkbySecurity, _super);
    function MpkbySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], MpkbySecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], MpkbySecurity.prototype, "clientId", void 0);
    return MpkbySecurity;
}(utils_1.SpeakeasyBase));
exports.MpkbySecurity = MpkbySecurity;
var Mpkby400ApplicationJsonErrorEnum;
(function (Mpkby400ApplicationJsonErrorEnum) {
    Mpkby400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Mpkby400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Mpkby400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Mpkby400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Mpkby400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Mpkby400ApplicationJsonErrorEnum = exports.Mpkby400ApplicationJsonErrorEnum || (exports.Mpkby400ApplicationJsonErrorEnum = {}));
var Mpkby400ApplicationJsonErrorDescriptionEnum;
(function (Mpkby400ApplicationJsonErrorDescriptionEnum) {
    Mpkby400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Mpkby400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Mpkby400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Mpkby400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Mpkby400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Mpkby400ApplicationJsonErrorDescriptionEnum = exports.Mpkby400ApplicationJsonErrorDescriptionEnum || (exports.Mpkby400ApplicationJsonErrorDescriptionEnum = {}));
var Mpkby400ApplicationJson = /** @class */ (function (_super) {
    __extends(Mpkby400ApplicationJson, _super);
    function Mpkby400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mpkby400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mpkby400ApplicationJson.prototype, "errorDescription", void 0);
    return Mpkby400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mpkby400ApplicationJson = Mpkby400ApplicationJson;
var Mpkby401ApplicationJsonErrorEnum;
(function (Mpkby401ApplicationJsonErrorEnum) {
    Mpkby401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Mpkby401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Mpkby401ApplicationJsonErrorEnum = exports.Mpkby401ApplicationJsonErrorEnum || (exports.Mpkby401ApplicationJsonErrorEnum = {}));
var Mpkby401ApplicationJsonErrorDescriptionEnum;
(function (Mpkby401ApplicationJsonErrorDescriptionEnum) {
    Mpkby401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Mpkby401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Mpkby401ApplicationJsonErrorDescriptionEnum = exports.Mpkby401ApplicationJsonErrorDescriptionEnum || (exports.Mpkby401ApplicationJsonErrorDescriptionEnum = {}));
var Mpkby401ApplicationJson = /** @class */ (function (_super) {
    __extends(Mpkby401ApplicationJson, _super);
    function Mpkby401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mpkby401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mpkby401ApplicationJson.prototype, "errorDescription", void 0);
    return Mpkby401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mpkby401ApplicationJson = Mpkby401ApplicationJson;
var Mpkby404ApplicationJsonErrorEnum;
(function (Mpkby404ApplicationJsonErrorEnum) {
    Mpkby404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Mpkby404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Mpkby404ApplicationJsonErrorEnum = exports.Mpkby404ApplicationJsonErrorEnum || (exports.Mpkby404ApplicationJsonErrorEnum = {}));
var Mpkby404ApplicationJsonErrorDescriptionEnum;
(function (Mpkby404ApplicationJsonErrorDescriptionEnum) {
    Mpkby404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Mpkby404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Mpkby404ApplicationJsonErrorDescriptionEnum = exports.Mpkby404ApplicationJsonErrorDescriptionEnum || (exports.Mpkby404ApplicationJsonErrorDescriptionEnum = {}));
var Mpkby404ApplicationJson = /** @class */ (function (_super) {
    __extends(Mpkby404ApplicationJson, _super);
    function Mpkby404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mpkby404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mpkby404ApplicationJson.prototype, "errorDescription", void 0);
    return Mpkby404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mpkby404ApplicationJson = Mpkby404ApplicationJson;
var Mpkby500ApplicationJsonErrorEnum;
(function (Mpkby500ApplicationJsonErrorEnum) {
    Mpkby500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Mpkby500ApplicationJsonErrorEnum = exports.Mpkby500ApplicationJsonErrorEnum || (exports.Mpkby500ApplicationJsonErrorEnum = {}));
var Mpkby500ApplicationJsonErrorDescriptionEnum;
(function (Mpkby500ApplicationJsonErrorDescriptionEnum) {
    Mpkby500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Mpkby500ApplicationJsonErrorDescriptionEnum = exports.Mpkby500ApplicationJsonErrorDescriptionEnum || (exports.Mpkby500ApplicationJsonErrorDescriptionEnum = {}));
var Mpkby500ApplicationJson = /** @class */ (function (_super) {
    __extends(Mpkby500ApplicationJson, _super);
    function Mpkby500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mpkby500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mpkby500ApplicationJson.prototype, "errorDescription", void 0);
    return Mpkby500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mpkby500ApplicationJson = Mpkby500ApplicationJson;
var Mpkby502ApplicationJsonErrorEnum;
(function (Mpkby502ApplicationJsonErrorEnum) {
    Mpkby502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Mpkby502ApplicationJsonErrorEnum = exports.Mpkby502ApplicationJsonErrorEnum || (exports.Mpkby502ApplicationJsonErrorEnum = {}));
var Mpkby502ApplicationJsonErrorDescriptionEnum;
(function (Mpkby502ApplicationJsonErrorDescriptionEnum) {
    Mpkby502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Mpkby502ApplicationJsonErrorDescriptionEnum = exports.Mpkby502ApplicationJsonErrorDescriptionEnum || (exports.Mpkby502ApplicationJsonErrorDescriptionEnum = {}));
var Mpkby502ApplicationJson = /** @class */ (function (_super) {
    __extends(Mpkby502ApplicationJson, _super);
    function Mpkby502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mpkby502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mpkby502ApplicationJson.prototype, "errorDescription", void 0);
    return Mpkby502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mpkby502ApplicationJson = Mpkby502ApplicationJson;
var Mpkby503ApplicationJsonErrorEnum;
(function (Mpkby503ApplicationJsonErrorEnum) {
    Mpkby503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Mpkby503ApplicationJsonErrorEnum = exports.Mpkby503ApplicationJsonErrorEnum || (exports.Mpkby503ApplicationJsonErrorEnum = {}));
var Mpkby503ApplicationJsonErrorDescriptionEnum;
(function (Mpkby503ApplicationJsonErrorDescriptionEnum) {
    Mpkby503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Mpkby503ApplicationJsonErrorDescriptionEnum = exports.Mpkby503ApplicationJsonErrorDescriptionEnum || (exports.Mpkby503ApplicationJsonErrorDescriptionEnum = {}));
var Mpkby503ApplicationJson = /** @class */ (function (_super) {
    __extends(Mpkby503ApplicationJson, _super);
    function Mpkby503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mpkby503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mpkby503ApplicationJson.prototype, "errorDescription", void 0);
    return Mpkby503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mpkby503ApplicationJson = Mpkby503ApplicationJson;
var Mpkby504ApplicationJsonErrorEnum;
(function (Mpkby504ApplicationJsonErrorEnum) {
    Mpkby504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Mpkby504ApplicationJsonErrorEnum = exports.Mpkby504ApplicationJsonErrorEnum || (exports.Mpkby504ApplicationJsonErrorEnum = {}));
var Mpkby504ApplicationJsonErrorDescriptionEnum;
(function (Mpkby504ApplicationJsonErrorDescriptionEnum) {
    Mpkby504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Mpkby504ApplicationJsonErrorDescriptionEnum = exports.Mpkby504ApplicationJsonErrorDescriptionEnum || (exports.Mpkby504ApplicationJsonErrorDescriptionEnum = {}));
var Mpkby504ApplicationJson = /** @class */ (function (_super) {
    __extends(Mpkby504ApplicationJson, _super);
    function Mpkby504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Mpkby504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Mpkby504ApplicationJson.prototype, "errorDescription", void 0);
    return Mpkby504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Mpkby504ApplicationJson = Mpkby504ApplicationJson;
var MpkbyRequest = /** @class */ (function (_super) {
    __extends(MpkbyRequest, _super);
    function MpkbyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", MpkbyRequestBody)
    ], MpkbyRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MpkbySecurity)
    ], MpkbyRequest.prototype, "security", void 0);
    return MpkbyRequest;
}(utils_1.SpeakeasyBase));
exports.MpkbyRequest = MpkbyRequest;
var MpkbyResponse = /** @class */ (function (_super) {
    __extends(MpkbyResponse, _super);
    function MpkbyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MpkbyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MpkbyResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mpkby400ApplicationJson)
    ], MpkbyResponse.prototype, "mpkby400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mpkby401ApplicationJson)
    ], MpkbyResponse.prototype, "mpkby401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mpkby404ApplicationJson)
    ], MpkbyResponse.prototype, "mpkby404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mpkby500ApplicationJson)
    ], MpkbyResponse.prototype, "mpkby500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mpkby502ApplicationJson)
    ], MpkbyResponse.prototype, "mpkby502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mpkby503ApplicationJson)
    ], MpkbyResponse.prototype, "mpkby503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Mpkby504ApplicationJson)
    ], MpkbyResponse.prototype, "mpkby504ApplicationJSONObject", void 0);
    return MpkbyResponse;
}(utils_1.SpeakeasyBase));
exports.MpkbyResponse = MpkbyResponse;
