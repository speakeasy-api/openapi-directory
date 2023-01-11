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
exports.PrcptResponse = exports.PrcptRequest = exports.Prcpt504ApplicationJson = exports.Prcpt504ApplicationJsonErrorDescriptionEnum = exports.Prcpt504ApplicationJsonErrorEnum = exports.Prcpt503ApplicationJson = exports.Prcpt503ApplicationJsonErrorDescriptionEnum = exports.Prcpt503ApplicationJsonErrorEnum = exports.Prcpt502ApplicationJson = exports.Prcpt502ApplicationJsonErrorDescriptionEnum = exports.Prcpt502ApplicationJsonErrorEnum = exports.Prcpt500ApplicationJson = exports.Prcpt500ApplicationJsonErrorDescriptionEnum = exports.Prcpt500ApplicationJsonErrorEnum = exports.Prcpt404ApplicationJson = exports.Prcpt404ApplicationJsonErrorDescriptionEnum = exports.Prcpt404ApplicationJsonErrorEnum = exports.Prcpt401ApplicationJson = exports.Prcpt401ApplicationJsonErrorDescriptionEnum = exports.Prcpt401ApplicationJsonErrorEnum = exports.Prcpt400ApplicationJson = exports.Prcpt400ApplicationJsonErrorDescriptionEnum = exports.Prcpt400ApplicationJsonErrorEnum = exports.PrcptSecurity = exports.PrcptRequestBody = exports.PrcptRequestBodyFormatEnum = exports.PrcptRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PrcptRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(PrcptRequestBodyCertificateParameters, _super);
    function PrcptRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], PrcptRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PI_DOB" }),
        __metadata("design:type", String)
    ], PrcptRequestBodyCertificateParameters.prototype, "piDOB", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PI_FIN_YEAR" }),
        __metadata("design:type", String)
    ], PrcptRequestBodyCertificateParameters.prototype, "piFINYEAR", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PI_POLICYNBR" }),
        __metadata("design:type", String)
    ], PrcptRequestBodyCertificateParameters.prototype, "piPOLICYNBR", void 0);
    return PrcptRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.PrcptRequestBodyCertificateParameters = PrcptRequestBodyCertificateParameters;
var PrcptRequestBodyFormatEnum;
(function (PrcptRequestBodyFormatEnum) {
    PrcptRequestBodyFormatEnum["Pdf"] = "pdf";
})(PrcptRequestBodyFormatEnum = exports.PrcptRequestBodyFormatEnum || (exports.PrcptRequestBodyFormatEnum = {}));
var PrcptRequestBody = /** @class */ (function (_super) {
    __extends(PrcptRequestBody, _super);
    function PrcptRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", PrcptRequestBodyCertificateParameters)
    ], PrcptRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], PrcptRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PrcptRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], PrcptRequestBody.prototype, "txnId", void 0);
    return PrcptRequestBody;
}(utils_1.SpeakeasyBase));
exports.PrcptRequestBody = PrcptRequestBody;
var PrcptSecurity = /** @class */ (function (_super) {
    __extends(PrcptSecurity, _super);
    function PrcptSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PrcptSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], PrcptSecurity.prototype, "clientId", void 0);
    return PrcptSecurity;
}(utils_1.SpeakeasyBase));
exports.PrcptSecurity = PrcptSecurity;
var Prcpt400ApplicationJsonErrorEnum;
(function (Prcpt400ApplicationJsonErrorEnum) {
    Prcpt400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Prcpt400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Prcpt400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Prcpt400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Prcpt400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Prcpt400ApplicationJsonErrorEnum = exports.Prcpt400ApplicationJsonErrorEnum || (exports.Prcpt400ApplicationJsonErrorEnum = {}));
var Prcpt400ApplicationJsonErrorDescriptionEnum;
(function (Prcpt400ApplicationJsonErrorDescriptionEnum) {
    Prcpt400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Prcpt400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Prcpt400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Prcpt400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Prcpt400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Prcpt400ApplicationJsonErrorDescriptionEnum = exports.Prcpt400ApplicationJsonErrorDescriptionEnum || (exports.Prcpt400ApplicationJsonErrorDescriptionEnum = {}));
var Prcpt400ApplicationJson = /** @class */ (function (_super) {
    __extends(Prcpt400ApplicationJson, _super);
    function Prcpt400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Prcpt400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Prcpt400ApplicationJson.prototype, "errorDescription", void 0);
    return Prcpt400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Prcpt400ApplicationJson = Prcpt400ApplicationJson;
var Prcpt401ApplicationJsonErrorEnum;
(function (Prcpt401ApplicationJsonErrorEnum) {
    Prcpt401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Prcpt401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Prcpt401ApplicationJsonErrorEnum = exports.Prcpt401ApplicationJsonErrorEnum || (exports.Prcpt401ApplicationJsonErrorEnum = {}));
var Prcpt401ApplicationJsonErrorDescriptionEnum;
(function (Prcpt401ApplicationJsonErrorDescriptionEnum) {
    Prcpt401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Prcpt401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Prcpt401ApplicationJsonErrorDescriptionEnum = exports.Prcpt401ApplicationJsonErrorDescriptionEnum || (exports.Prcpt401ApplicationJsonErrorDescriptionEnum = {}));
var Prcpt401ApplicationJson = /** @class */ (function (_super) {
    __extends(Prcpt401ApplicationJson, _super);
    function Prcpt401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Prcpt401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Prcpt401ApplicationJson.prototype, "errorDescription", void 0);
    return Prcpt401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Prcpt401ApplicationJson = Prcpt401ApplicationJson;
var Prcpt404ApplicationJsonErrorEnum;
(function (Prcpt404ApplicationJsonErrorEnum) {
    Prcpt404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Prcpt404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Prcpt404ApplicationJsonErrorEnum = exports.Prcpt404ApplicationJsonErrorEnum || (exports.Prcpt404ApplicationJsonErrorEnum = {}));
var Prcpt404ApplicationJsonErrorDescriptionEnum;
(function (Prcpt404ApplicationJsonErrorDescriptionEnum) {
    Prcpt404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Prcpt404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Prcpt404ApplicationJsonErrorDescriptionEnum = exports.Prcpt404ApplicationJsonErrorDescriptionEnum || (exports.Prcpt404ApplicationJsonErrorDescriptionEnum = {}));
var Prcpt404ApplicationJson = /** @class */ (function (_super) {
    __extends(Prcpt404ApplicationJson, _super);
    function Prcpt404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Prcpt404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Prcpt404ApplicationJson.prototype, "errorDescription", void 0);
    return Prcpt404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Prcpt404ApplicationJson = Prcpt404ApplicationJson;
var Prcpt500ApplicationJsonErrorEnum;
(function (Prcpt500ApplicationJsonErrorEnum) {
    Prcpt500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Prcpt500ApplicationJsonErrorEnum = exports.Prcpt500ApplicationJsonErrorEnum || (exports.Prcpt500ApplicationJsonErrorEnum = {}));
var Prcpt500ApplicationJsonErrorDescriptionEnum;
(function (Prcpt500ApplicationJsonErrorDescriptionEnum) {
    Prcpt500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Prcpt500ApplicationJsonErrorDescriptionEnum = exports.Prcpt500ApplicationJsonErrorDescriptionEnum || (exports.Prcpt500ApplicationJsonErrorDescriptionEnum = {}));
var Prcpt500ApplicationJson = /** @class */ (function (_super) {
    __extends(Prcpt500ApplicationJson, _super);
    function Prcpt500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Prcpt500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Prcpt500ApplicationJson.prototype, "errorDescription", void 0);
    return Prcpt500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Prcpt500ApplicationJson = Prcpt500ApplicationJson;
var Prcpt502ApplicationJsonErrorEnum;
(function (Prcpt502ApplicationJsonErrorEnum) {
    Prcpt502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Prcpt502ApplicationJsonErrorEnum = exports.Prcpt502ApplicationJsonErrorEnum || (exports.Prcpt502ApplicationJsonErrorEnum = {}));
var Prcpt502ApplicationJsonErrorDescriptionEnum;
(function (Prcpt502ApplicationJsonErrorDescriptionEnum) {
    Prcpt502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Prcpt502ApplicationJsonErrorDescriptionEnum = exports.Prcpt502ApplicationJsonErrorDescriptionEnum || (exports.Prcpt502ApplicationJsonErrorDescriptionEnum = {}));
var Prcpt502ApplicationJson = /** @class */ (function (_super) {
    __extends(Prcpt502ApplicationJson, _super);
    function Prcpt502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Prcpt502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Prcpt502ApplicationJson.prototype, "errorDescription", void 0);
    return Prcpt502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Prcpt502ApplicationJson = Prcpt502ApplicationJson;
var Prcpt503ApplicationJsonErrorEnum;
(function (Prcpt503ApplicationJsonErrorEnum) {
    Prcpt503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Prcpt503ApplicationJsonErrorEnum = exports.Prcpt503ApplicationJsonErrorEnum || (exports.Prcpt503ApplicationJsonErrorEnum = {}));
var Prcpt503ApplicationJsonErrorDescriptionEnum;
(function (Prcpt503ApplicationJsonErrorDescriptionEnum) {
    Prcpt503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Prcpt503ApplicationJsonErrorDescriptionEnum = exports.Prcpt503ApplicationJsonErrorDescriptionEnum || (exports.Prcpt503ApplicationJsonErrorDescriptionEnum = {}));
var Prcpt503ApplicationJson = /** @class */ (function (_super) {
    __extends(Prcpt503ApplicationJson, _super);
    function Prcpt503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Prcpt503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Prcpt503ApplicationJson.prototype, "errorDescription", void 0);
    return Prcpt503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Prcpt503ApplicationJson = Prcpt503ApplicationJson;
var Prcpt504ApplicationJsonErrorEnum;
(function (Prcpt504ApplicationJsonErrorEnum) {
    Prcpt504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Prcpt504ApplicationJsonErrorEnum = exports.Prcpt504ApplicationJsonErrorEnum || (exports.Prcpt504ApplicationJsonErrorEnum = {}));
var Prcpt504ApplicationJsonErrorDescriptionEnum;
(function (Prcpt504ApplicationJsonErrorDescriptionEnum) {
    Prcpt504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Prcpt504ApplicationJsonErrorDescriptionEnum = exports.Prcpt504ApplicationJsonErrorDescriptionEnum || (exports.Prcpt504ApplicationJsonErrorDescriptionEnum = {}));
var Prcpt504ApplicationJson = /** @class */ (function (_super) {
    __extends(Prcpt504ApplicationJson, _super);
    function Prcpt504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Prcpt504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Prcpt504ApplicationJson.prototype, "errorDescription", void 0);
    return Prcpt504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Prcpt504ApplicationJson = Prcpt504ApplicationJson;
var PrcptRequest = /** @class */ (function (_super) {
    __extends(PrcptRequest, _super);
    function PrcptRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PrcptRequestBody)
    ], PrcptRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PrcptSecurity)
    ], PrcptRequest.prototype, "security", void 0);
    return PrcptRequest;
}(utils_1.SpeakeasyBase));
exports.PrcptRequest = PrcptRequest;
var PrcptResponse = /** @class */ (function (_super) {
    __extends(PrcptResponse, _super);
    function PrcptResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PrcptResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PrcptResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Prcpt400ApplicationJson)
    ], PrcptResponse.prototype, "prcpt400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Prcpt401ApplicationJson)
    ], PrcptResponse.prototype, "prcpt401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Prcpt404ApplicationJson)
    ], PrcptResponse.prototype, "prcpt404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Prcpt500ApplicationJson)
    ], PrcptResponse.prototype, "prcpt500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Prcpt502ApplicationJson)
    ], PrcptResponse.prototype, "prcpt502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Prcpt503ApplicationJson)
    ], PrcptResponse.prototype, "prcpt503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Prcpt504ApplicationJson)
    ], PrcptResponse.prototype, "prcpt504ApplicationJSONObject", void 0);
    return PrcptResponse;
}(utils_1.SpeakeasyBase));
exports.PrcptResponse = PrcptResponse;
