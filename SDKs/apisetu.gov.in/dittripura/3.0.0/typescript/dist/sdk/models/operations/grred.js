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
exports.GrredResponse = exports.GrredRequest = exports.Grred504ApplicationJson = exports.Grred504ApplicationJsonErrorDescriptionEnum = exports.Grred504ApplicationJsonErrorEnum = exports.Grred503ApplicationJson = exports.Grred503ApplicationJsonErrorDescriptionEnum = exports.Grred503ApplicationJsonErrorEnum = exports.Grred502ApplicationJson = exports.Grred502ApplicationJsonErrorDescriptionEnum = exports.Grred502ApplicationJsonErrorEnum = exports.Grred500ApplicationJson = exports.Grred500ApplicationJsonErrorDescriptionEnum = exports.Grred500ApplicationJsonErrorEnum = exports.Grred404ApplicationJson = exports.Grred404ApplicationJsonErrorDescriptionEnum = exports.Grred404ApplicationJsonErrorEnum = exports.Grred401ApplicationJson = exports.Grred401ApplicationJsonErrorDescriptionEnum = exports.Grred401ApplicationJsonErrorEnum = exports.Grred400ApplicationJson = exports.Grred400ApplicationJsonErrorDescriptionEnum = exports.Grred400ApplicationJsonErrorEnum = exports.GrredSecurity = exports.GrredRequestBody = exports.GrredRequestBodyFormatEnum = exports.GrredRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GrredRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(GrredRequestBodyCertificateParameters, _super);
    function GrredRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], GrredRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], GrredRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return GrredRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.GrredRequestBodyCertificateParameters = GrredRequestBodyCertificateParameters;
var GrredRequestBodyFormatEnum;
(function (GrredRequestBodyFormatEnum) {
    GrredRequestBodyFormatEnum["Pdf"] = "pdf";
})(GrredRequestBodyFormatEnum = exports.GrredRequestBodyFormatEnum || (exports.GrredRequestBodyFormatEnum = {}));
var GrredRequestBody = /** @class */ (function (_super) {
    __extends(GrredRequestBody, _super);
    function GrredRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", GrredRequestBodyCertificateParameters)
    ], GrredRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], GrredRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], GrredRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], GrredRequestBody.prototype, "txnId", void 0);
    return GrredRequestBody;
}(utils_1.SpeakeasyBase));
exports.GrredRequestBody = GrredRequestBody;
var GrredSecurity = /** @class */ (function (_super) {
    __extends(GrredSecurity, _super);
    function GrredSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GrredSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], GrredSecurity.prototype, "clientId", void 0);
    return GrredSecurity;
}(utils_1.SpeakeasyBase));
exports.GrredSecurity = GrredSecurity;
var Grred400ApplicationJsonErrorEnum;
(function (Grred400ApplicationJsonErrorEnum) {
    Grred400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Grred400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Grred400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Grred400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Grred400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Grred400ApplicationJsonErrorEnum = exports.Grred400ApplicationJsonErrorEnum || (exports.Grred400ApplicationJsonErrorEnum = {}));
var Grred400ApplicationJsonErrorDescriptionEnum;
(function (Grred400ApplicationJsonErrorDescriptionEnum) {
    Grred400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Grred400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Grred400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Grred400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Grred400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Grred400ApplicationJsonErrorDescriptionEnum = exports.Grred400ApplicationJsonErrorDescriptionEnum || (exports.Grred400ApplicationJsonErrorDescriptionEnum = {}));
var Grred400ApplicationJson = /** @class */ (function (_super) {
    __extends(Grred400ApplicationJson, _super);
    function Grred400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Grred400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Grred400ApplicationJson.prototype, "errorDescription", void 0);
    return Grred400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Grred400ApplicationJson = Grred400ApplicationJson;
var Grred401ApplicationJsonErrorEnum;
(function (Grred401ApplicationJsonErrorEnum) {
    Grred401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Grred401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Grred401ApplicationJsonErrorEnum = exports.Grred401ApplicationJsonErrorEnum || (exports.Grred401ApplicationJsonErrorEnum = {}));
var Grred401ApplicationJsonErrorDescriptionEnum;
(function (Grred401ApplicationJsonErrorDescriptionEnum) {
    Grred401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Grred401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Grred401ApplicationJsonErrorDescriptionEnum = exports.Grred401ApplicationJsonErrorDescriptionEnum || (exports.Grred401ApplicationJsonErrorDescriptionEnum = {}));
var Grred401ApplicationJson = /** @class */ (function (_super) {
    __extends(Grred401ApplicationJson, _super);
    function Grred401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Grred401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Grred401ApplicationJson.prototype, "errorDescription", void 0);
    return Grred401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Grred401ApplicationJson = Grred401ApplicationJson;
var Grred404ApplicationJsonErrorEnum;
(function (Grred404ApplicationJsonErrorEnum) {
    Grred404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Grred404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Grred404ApplicationJsonErrorEnum = exports.Grred404ApplicationJsonErrorEnum || (exports.Grred404ApplicationJsonErrorEnum = {}));
var Grred404ApplicationJsonErrorDescriptionEnum;
(function (Grred404ApplicationJsonErrorDescriptionEnum) {
    Grred404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Grred404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Grred404ApplicationJsonErrorDescriptionEnum = exports.Grred404ApplicationJsonErrorDescriptionEnum || (exports.Grred404ApplicationJsonErrorDescriptionEnum = {}));
var Grred404ApplicationJson = /** @class */ (function (_super) {
    __extends(Grred404ApplicationJson, _super);
    function Grred404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Grred404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Grred404ApplicationJson.prototype, "errorDescription", void 0);
    return Grred404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Grred404ApplicationJson = Grred404ApplicationJson;
var Grred500ApplicationJsonErrorEnum;
(function (Grred500ApplicationJsonErrorEnum) {
    Grred500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Grred500ApplicationJsonErrorEnum = exports.Grred500ApplicationJsonErrorEnum || (exports.Grred500ApplicationJsonErrorEnum = {}));
var Grred500ApplicationJsonErrorDescriptionEnum;
(function (Grred500ApplicationJsonErrorDescriptionEnum) {
    Grred500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Grred500ApplicationJsonErrorDescriptionEnum = exports.Grred500ApplicationJsonErrorDescriptionEnum || (exports.Grred500ApplicationJsonErrorDescriptionEnum = {}));
var Grred500ApplicationJson = /** @class */ (function (_super) {
    __extends(Grred500ApplicationJson, _super);
    function Grred500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Grred500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Grred500ApplicationJson.prototype, "errorDescription", void 0);
    return Grred500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Grred500ApplicationJson = Grred500ApplicationJson;
var Grred502ApplicationJsonErrorEnum;
(function (Grred502ApplicationJsonErrorEnum) {
    Grred502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Grred502ApplicationJsonErrorEnum = exports.Grred502ApplicationJsonErrorEnum || (exports.Grred502ApplicationJsonErrorEnum = {}));
var Grred502ApplicationJsonErrorDescriptionEnum;
(function (Grred502ApplicationJsonErrorDescriptionEnum) {
    Grred502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Grred502ApplicationJsonErrorDescriptionEnum = exports.Grred502ApplicationJsonErrorDescriptionEnum || (exports.Grred502ApplicationJsonErrorDescriptionEnum = {}));
var Grred502ApplicationJson = /** @class */ (function (_super) {
    __extends(Grred502ApplicationJson, _super);
    function Grred502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Grred502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Grred502ApplicationJson.prototype, "errorDescription", void 0);
    return Grred502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Grred502ApplicationJson = Grred502ApplicationJson;
var Grred503ApplicationJsonErrorEnum;
(function (Grred503ApplicationJsonErrorEnum) {
    Grred503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Grred503ApplicationJsonErrorEnum = exports.Grred503ApplicationJsonErrorEnum || (exports.Grred503ApplicationJsonErrorEnum = {}));
var Grred503ApplicationJsonErrorDescriptionEnum;
(function (Grred503ApplicationJsonErrorDescriptionEnum) {
    Grred503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Grred503ApplicationJsonErrorDescriptionEnum = exports.Grred503ApplicationJsonErrorDescriptionEnum || (exports.Grred503ApplicationJsonErrorDescriptionEnum = {}));
var Grred503ApplicationJson = /** @class */ (function (_super) {
    __extends(Grred503ApplicationJson, _super);
    function Grred503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Grred503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Grred503ApplicationJson.prototype, "errorDescription", void 0);
    return Grred503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Grred503ApplicationJson = Grred503ApplicationJson;
var Grred504ApplicationJsonErrorEnum;
(function (Grred504ApplicationJsonErrorEnum) {
    Grred504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Grred504ApplicationJsonErrorEnum = exports.Grred504ApplicationJsonErrorEnum || (exports.Grred504ApplicationJsonErrorEnum = {}));
var Grred504ApplicationJsonErrorDescriptionEnum;
(function (Grred504ApplicationJsonErrorDescriptionEnum) {
    Grred504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Grred504ApplicationJsonErrorDescriptionEnum = exports.Grred504ApplicationJsonErrorDescriptionEnum || (exports.Grred504ApplicationJsonErrorDescriptionEnum = {}));
var Grred504ApplicationJson = /** @class */ (function (_super) {
    __extends(Grred504ApplicationJson, _super);
    function Grred504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Grred504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Grred504ApplicationJson.prototype, "errorDescription", void 0);
    return Grred504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Grred504ApplicationJson = Grred504ApplicationJson;
var GrredRequest = /** @class */ (function (_super) {
    __extends(GrredRequest, _super);
    function GrredRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", GrredRequestBody)
    ], GrredRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GrredSecurity)
    ], GrredRequest.prototype, "security", void 0);
    return GrredRequest;
}(utils_1.SpeakeasyBase));
exports.GrredRequest = GrredRequest;
var GrredResponse = /** @class */ (function (_super) {
    __extends(GrredResponse, _super);
    function GrredResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GrredResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GrredResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Grred400ApplicationJson)
    ], GrredResponse.prototype, "grred400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Grred401ApplicationJson)
    ], GrredResponse.prototype, "grred401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Grred404ApplicationJson)
    ], GrredResponse.prototype, "grred404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Grred500ApplicationJson)
    ], GrredResponse.prototype, "grred500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Grred502ApplicationJson)
    ], GrredResponse.prototype, "grred502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Grred503ApplicationJson)
    ], GrredResponse.prototype, "grred503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Grred504ApplicationJson)
    ], GrredResponse.prototype, "grred504ApplicationJSONObject", void 0);
    return GrredResponse;
}(utils_1.SpeakeasyBase));
exports.GrredResponse = GrredResponse;
