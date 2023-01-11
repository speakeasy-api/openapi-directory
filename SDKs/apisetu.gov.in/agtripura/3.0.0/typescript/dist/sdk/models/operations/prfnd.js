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
exports.PrfndResponse = exports.PrfndRequest = exports.Prfnd504ApplicationJson = exports.Prfnd504ApplicationJsonErrorDescriptionEnum = exports.Prfnd504ApplicationJsonErrorEnum = exports.Prfnd503ApplicationJson = exports.Prfnd503ApplicationJsonErrorDescriptionEnum = exports.Prfnd503ApplicationJsonErrorEnum = exports.Prfnd502ApplicationJson = exports.Prfnd502ApplicationJsonErrorDescriptionEnum = exports.Prfnd502ApplicationJsonErrorEnum = exports.Prfnd500ApplicationJson = exports.Prfnd500ApplicationJsonErrorDescriptionEnum = exports.Prfnd500ApplicationJsonErrorEnum = exports.Prfnd404ApplicationJson = exports.Prfnd404ApplicationJsonErrorDescriptionEnum = exports.Prfnd404ApplicationJsonErrorEnum = exports.Prfnd401ApplicationJson = exports.Prfnd401ApplicationJsonErrorDescriptionEnum = exports.Prfnd401ApplicationJsonErrorEnum = exports.Prfnd400ApplicationJson = exports.Prfnd400ApplicationJsonErrorDescriptionEnum = exports.Prfnd400ApplicationJsonErrorEnum = exports.PrfndSecurity = exports.PrfndRequestBody = exports.PrfndRequestBodyFormatEnum = exports.PrfndRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PrfndRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(PrfndRequestBodyCertificateParameters, _super);
    function PrfndRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AC_NO" }),
        __metadata("design:type", String)
    ], PrfndRequestBodyCertificateParameters.prototype, "acNO", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], PrfndRequestBodyCertificateParameters.prototype, "dob", void 0);
    return PrfndRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.PrfndRequestBodyCertificateParameters = PrfndRequestBodyCertificateParameters;
var PrfndRequestBodyFormatEnum;
(function (PrfndRequestBodyFormatEnum) {
    PrfndRequestBodyFormatEnum["Pdf"] = "pdf";
})(PrfndRequestBodyFormatEnum = exports.PrfndRequestBodyFormatEnum || (exports.PrfndRequestBodyFormatEnum = {}));
var PrfndRequestBody = /** @class */ (function (_super) {
    __extends(PrfndRequestBody, _super);
    function PrfndRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", PrfndRequestBodyCertificateParameters)
    ], PrfndRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], PrfndRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PrfndRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], PrfndRequestBody.prototype, "txnId", void 0);
    return PrfndRequestBody;
}(utils_1.SpeakeasyBase));
exports.PrfndRequestBody = PrfndRequestBody;
var PrfndSecurity = /** @class */ (function (_super) {
    __extends(PrfndSecurity, _super);
    function PrfndSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PrfndSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], PrfndSecurity.prototype, "clientId", void 0);
    return PrfndSecurity;
}(utils_1.SpeakeasyBase));
exports.PrfndSecurity = PrfndSecurity;
var Prfnd400ApplicationJsonErrorEnum;
(function (Prfnd400ApplicationJsonErrorEnum) {
    Prfnd400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Prfnd400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Prfnd400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Prfnd400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Prfnd400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Prfnd400ApplicationJsonErrorEnum = exports.Prfnd400ApplicationJsonErrorEnum || (exports.Prfnd400ApplicationJsonErrorEnum = {}));
var Prfnd400ApplicationJsonErrorDescriptionEnum;
(function (Prfnd400ApplicationJsonErrorDescriptionEnum) {
    Prfnd400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Prfnd400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Prfnd400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Prfnd400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Prfnd400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Prfnd400ApplicationJsonErrorDescriptionEnum = exports.Prfnd400ApplicationJsonErrorDescriptionEnum || (exports.Prfnd400ApplicationJsonErrorDescriptionEnum = {}));
var Prfnd400ApplicationJson = /** @class */ (function (_super) {
    __extends(Prfnd400ApplicationJson, _super);
    function Prfnd400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Prfnd400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Prfnd400ApplicationJson.prototype, "errorDescription", void 0);
    return Prfnd400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Prfnd400ApplicationJson = Prfnd400ApplicationJson;
var Prfnd401ApplicationJsonErrorEnum;
(function (Prfnd401ApplicationJsonErrorEnum) {
    Prfnd401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Prfnd401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Prfnd401ApplicationJsonErrorEnum = exports.Prfnd401ApplicationJsonErrorEnum || (exports.Prfnd401ApplicationJsonErrorEnum = {}));
var Prfnd401ApplicationJsonErrorDescriptionEnum;
(function (Prfnd401ApplicationJsonErrorDescriptionEnum) {
    Prfnd401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Prfnd401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Prfnd401ApplicationJsonErrorDescriptionEnum = exports.Prfnd401ApplicationJsonErrorDescriptionEnum || (exports.Prfnd401ApplicationJsonErrorDescriptionEnum = {}));
var Prfnd401ApplicationJson = /** @class */ (function (_super) {
    __extends(Prfnd401ApplicationJson, _super);
    function Prfnd401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Prfnd401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Prfnd401ApplicationJson.prototype, "errorDescription", void 0);
    return Prfnd401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Prfnd401ApplicationJson = Prfnd401ApplicationJson;
var Prfnd404ApplicationJsonErrorEnum;
(function (Prfnd404ApplicationJsonErrorEnum) {
    Prfnd404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Prfnd404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Prfnd404ApplicationJsonErrorEnum = exports.Prfnd404ApplicationJsonErrorEnum || (exports.Prfnd404ApplicationJsonErrorEnum = {}));
var Prfnd404ApplicationJsonErrorDescriptionEnum;
(function (Prfnd404ApplicationJsonErrorDescriptionEnum) {
    Prfnd404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Prfnd404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Prfnd404ApplicationJsonErrorDescriptionEnum = exports.Prfnd404ApplicationJsonErrorDescriptionEnum || (exports.Prfnd404ApplicationJsonErrorDescriptionEnum = {}));
var Prfnd404ApplicationJson = /** @class */ (function (_super) {
    __extends(Prfnd404ApplicationJson, _super);
    function Prfnd404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Prfnd404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Prfnd404ApplicationJson.prototype, "errorDescription", void 0);
    return Prfnd404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Prfnd404ApplicationJson = Prfnd404ApplicationJson;
var Prfnd500ApplicationJsonErrorEnum;
(function (Prfnd500ApplicationJsonErrorEnum) {
    Prfnd500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Prfnd500ApplicationJsonErrorEnum = exports.Prfnd500ApplicationJsonErrorEnum || (exports.Prfnd500ApplicationJsonErrorEnum = {}));
var Prfnd500ApplicationJsonErrorDescriptionEnum;
(function (Prfnd500ApplicationJsonErrorDescriptionEnum) {
    Prfnd500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Prfnd500ApplicationJsonErrorDescriptionEnum = exports.Prfnd500ApplicationJsonErrorDescriptionEnum || (exports.Prfnd500ApplicationJsonErrorDescriptionEnum = {}));
var Prfnd500ApplicationJson = /** @class */ (function (_super) {
    __extends(Prfnd500ApplicationJson, _super);
    function Prfnd500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Prfnd500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Prfnd500ApplicationJson.prototype, "errorDescription", void 0);
    return Prfnd500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Prfnd500ApplicationJson = Prfnd500ApplicationJson;
var Prfnd502ApplicationJsonErrorEnum;
(function (Prfnd502ApplicationJsonErrorEnum) {
    Prfnd502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Prfnd502ApplicationJsonErrorEnum = exports.Prfnd502ApplicationJsonErrorEnum || (exports.Prfnd502ApplicationJsonErrorEnum = {}));
var Prfnd502ApplicationJsonErrorDescriptionEnum;
(function (Prfnd502ApplicationJsonErrorDescriptionEnum) {
    Prfnd502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Prfnd502ApplicationJsonErrorDescriptionEnum = exports.Prfnd502ApplicationJsonErrorDescriptionEnum || (exports.Prfnd502ApplicationJsonErrorDescriptionEnum = {}));
var Prfnd502ApplicationJson = /** @class */ (function (_super) {
    __extends(Prfnd502ApplicationJson, _super);
    function Prfnd502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Prfnd502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Prfnd502ApplicationJson.prototype, "errorDescription", void 0);
    return Prfnd502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Prfnd502ApplicationJson = Prfnd502ApplicationJson;
var Prfnd503ApplicationJsonErrorEnum;
(function (Prfnd503ApplicationJsonErrorEnum) {
    Prfnd503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Prfnd503ApplicationJsonErrorEnum = exports.Prfnd503ApplicationJsonErrorEnum || (exports.Prfnd503ApplicationJsonErrorEnum = {}));
var Prfnd503ApplicationJsonErrorDescriptionEnum;
(function (Prfnd503ApplicationJsonErrorDescriptionEnum) {
    Prfnd503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Prfnd503ApplicationJsonErrorDescriptionEnum = exports.Prfnd503ApplicationJsonErrorDescriptionEnum || (exports.Prfnd503ApplicationJsonErrorDescriptionEnum = {}));
var Prfnd503ApplicationJson = /** @class */ (function (_super) {
    __extends(Prfnd503ApplicationJson, _super);
    function Prfnd503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Prfnd503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Prfnd503ApplicationJson.prototype, "errorDescription", void 0);
    return Prfnd503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Prfnd503ApplicationJson = Prfnd503ApplicationJson;
var Prfnd504ApplicationJsonErrorEnum;
(function (Prfnd504ApplicationJsonErrorEnum) {
    Prfnd504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Prfnd504ApplicationJsonErrorEnum = exports.Prfnd504ApplicationJsonErrorEnum || (exports.Prfnd504ApplicationJsonErrorEnum = {}));
var Prfnd504ApplicationJsonErrorDescriptionEnum;
(function (Prfnd504ApplicationJsonErrorDescriptionEnum) {
    Prfnd504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Prfnd504ApplicationJsonErrorDescriptionEnum = exports.Prfnd504ApplicationJsonErrorDescriptionEnum || (exports.Prfnd504ApplicationJsonErrorDescriptionEnum = {}));
var Prfnd504ApplicationJson = /** @class */ (function (_super) {
    __extends(Prfnd504ApplicationJson, _super);
    function Prfnd504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Prfnd504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Prfnd504ApplicationJson.prototype, "errorDescription", void 0);
    return Prfnd504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Prfnd504ApplicationJson = Prfnd504ApplicationJson;
var PrfndRequest = /** @class */ (function (_super) {
    __extends(PrfndRequest, _super);
    function PrfndRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PrfndRequestBody)
    ], PrfndRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PrfndSecurity)
    ], PrfndRequest.prototype, "security", void 0);
    return PrfndRequest;
}(utils_1.SpeakeasyBase));
exports.PrfndRequest = PrfndRequest;
var PrfndResponse = /** @class */ (function (_super) {
    __extends(PrfndResponse, _super);
    function PrfndResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PrfndResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PrfndResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Prfnd400ApplicationJson)
    ], PrfndResponse.prototype, "prfnd400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Prfnd401ApplicationJson)
    ], PrfndResponse.prototype, "prfnd401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Prfnd404ApplicationJson)
    ], PrfndResponse.prototype, "prfnd404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Prfnd500ApplicationJson)
    ], PrfndResponse.prototype, "prfnd500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Prfnd502ApplicationJson)
    ], PrfndResponse.prototype, "prfnd502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Prfnd503ApplicationJson)
    ], PrfndResponse.prototype, "prfnd503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Prfnd504ApplicationJson)
    ], PrfndResponse.prototype, "prfnd504ApplicationJSONObject", void 0);
    return PrfndResponse;
}(utils_1.SpeakeasyBase));
exports.PrfndResponse = PrfndResponse;
