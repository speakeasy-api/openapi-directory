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
exports.TetmsResponse = exports.TetmsRequest = exports.Tetms504ApplicationJson = exports.Tetms504ApplicationJsonErrorDescriptionEnum = exports.Tetms504ApplicationJsonErrorEnum = exports.Tetms503ApplicationJson = exports.Tetms503ApplicationJsonErrorDescriptionEnum = exports.Tetms503ApplicationJsonErrorEnum = exports.Tetms502ApplicationJson = exports.Tetms502ApplicationJsonErrorDescriptionEnum = exports.Tetms502ApplicationJsonErrorEnum = exports.Tetms500ApplicationJson = exports.Tetms500ApplicationJsonErrorDescriptionEnum = exports.Tetms500ApplicationJsonErrorEnum = exports.Tetms404ApplicationJson = exports.Tetms404ApplicationJsonErrorDescriptionEnum = exports.Tetms404ApplicationJsonErrorEnum = exports.Tetms401ApplicationJson = exports.Tetms401ApplicationJsonErrorDescriptionEnum = exports.Tetms401ApplicationJsonErrorEnum = exports.Tetms400ApplicationJson = exports.Tetms400ApplicationJsonErrorDescriptionEnum = exports.Tetms400ApplicationJsonErrorEnum = exports.TetmsSecurity = exports.TetmsRequestBody = exports.TetmsRequestBodyFormatEnum = exports.TetmsRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TetmsRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(TetmsRequestBodyCertificateParameters, _super);
    function TetmsRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], TetmsRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rollno" }),
        __metadata("design:type", String)
    ], TetmsRequestBodyCertificateParameters.prototype, "rollno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=year_month" }),
        __metadata("design:type", String)
    ], TetmsRequestBodyCertificateParameters.prototype, "yearMonth", void 0);
    return TetmsRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.TetmsRequestBodyCertificateParameters = TetmsRequestBodyCertificateParameters;
var TetmsRequestBodyFormatEnum;
(function (TetmsRequestBodyFormatEnum) {
    TetmsRequestBodyFormatEnum["Pdf"] = "pdf";
})(TetmsRequestBodyFormatEnum = exports.TetmsRequestBodyFormatEnum || (exports.TetmsRequestBodyFormatEnum = {}));
var TetmsRequestBody = /** @class */ (function (_super) {
    __extends(TetmsRequestBody, _super);
    function TetmsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", TetmsRequestBodyCertificateParameters)
    ], TetmsRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], TetmsRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], TetmsRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], TetmsRequestBody.prototype, "txnId", void 0);
    return TetmsRequestBody;
}(utils_1.SpeakeasyBase));
exports.TetmsRequestBody = TetmsRequestBody;
var TetmsSecurity = /** @class */ (function (_super) {
    __extends(TetmsSecurity, _super);
    function TetmsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], TetmsSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], TetmsSecurity.prototype, "clientId", void 0);
    return TetmsSecurity;
}(utils_1.SpeakeasyBase));
exports.TetmsSecurity = TetmsSecurity;
var Tetms400ApplicationJsonErrorEnum;
(function (Tetms400ApplicationJsonErrorEnum) {
    Tetms400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Tetms400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Tetms400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Tetms400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Tetms400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Tetms400ApplicationJsonErrorEnum = exports.Tetms400ApplicationJsonErrorEnum || (exports.Tetms400ApplicationJsonErrorEnum = {}));
var Tetms400ApplicationJsonErrorDescriptionEnum;
(function (Tetms400ApplicationJsonErrorDescriptionEnum) {
    Tetms400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Tetms400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Tetms400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Tetms400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Tetms400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Tetms400ApplicationJsonErrorDescriptionEnum = exports.Tetms400ApplicationJsonErrorDescriptionEnum || (exports.Tetms400ApplicationJsonErrorDescriptionEnum = {}));
var Tetms400ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetms400ApplicationJson, _super);
    function Tetms400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetms400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetms400ApplicationJson.prototype, "errorDescription", void 0);
    return Tetms400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tetms400ApplicationJson = Tetms400ApplicationJson;
var Tetms401ApplicationJsonErrorEnum;
(function (Tetms401ApplicationJsonErrorEnum) {
    Tetms401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Tetms401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Tetms401ApplicationJsonErrorEnum = exports.Tetms401ApplicationJsonErrorEnum || (exports.Tetms401ApplicationJsonErrorEnum = {}));
var Tetms401ApplicationJsonErrorDescriptionEnum;
(function (Tetms401ApplicationJsonErrorDescriptionEnum) {
    Tetms401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Tetms401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Tetms401ApplicationJsonErrorDescriptionEnum = exports.Tetms401ApplicationJsonErrorDescriptionEnum || (exports.Tetms401ApplicationJsonErrorDescriptionEnum = {}));
var Tetms401ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetms401ApplicationJson, _super);
    function Tetms401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetms401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetms401ApplicationJson.prototype, "errorDescription", void 0);
    return Tetms401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tetms401ApplicationJson = Tetms401ApplicationJson;
var Tetms404ApplicationJsonErrorEnum;
(function (Tetms404ApplicationJsonErrorEnum) {
    Tetms404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Tetms404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Tetms404ApplicationJsonErrorEnum = exports.Tetms404ApplicationJsonErrorEnum || (exports.Tetms404ApplicationJsonErrorEnum = {}));
var Tetms404ApplicationJsonErrorDescriptionEnum;
(function (Tetms404ApplicationJsonErrorDescriptionEnum) {
    Tetms404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Tetms404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Tetms404ApplicationJsonErrorDescriptionEnum = exports.Tetms404ApplicationJsonErrorDescriptionEnum || (exports.Tetms404ApplicationJsonErrorDescriptionEnum = {}));
var Tetms404ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetms404ApplicationJson, _super);
    function Tetms404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetms404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetms404ApplicationJson.prototype, "errorDescription", void 0);
    return Tetms404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tetms404ApplicationJson = Tetms404ApplicationJson;
var Tetms500ApplicationJsonErrorEnum;
(function (Tetms500ApplicationJsonErrorEnum) {
    Tetms500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Tetms500ApplicationJsonErrorEnum = exports.Tetms500ApplicationJsonErrorEnum || (exports.Tetms500ApplicationJsonErrorEnum = {}));
var Tetms500ApplicationJsonErrorDescriptionEnum;
(function (Tetms500ApplicationJsonErrorDescriptionEnum) {
    Tetms500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Tetms500ApplicationJsonErrorDescriptionEnum = exports.Tetms500ApplicationJsonErrorDescriptionEnum || (exports.Tetms500ApplicationJsonErrorDescriptionEnum = {}));
var Tetms500ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetms500ApplicationJson, _super);
    function Tetms500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetms500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetms500ApplicationJson.prototype, "errorDescription", void 0);
    return Tetms500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tetms500ApplicationJson = Tetms500ApplicationJson;
var Tetms502ApplicationJsonErrorEnum;
(function (Tetms502ApplicationJsonErrorEnum) {
    Tetms502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Tetms502ApplicationJsonErrorEnum = exports.Tetms502ApplicationJsonErrorEnum || (exports.Tetms502ApplicationJsonErrorEnum = {}));
var Tetms502ApplicationJsonErrorDescriptionEnum;
(function (Tetms502ApplicationJsonErrorDescriptionEnum) {
    Tetms502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Tetms502ApplicationJsonErrorDescriptionEnum = exports.Tetms502ApplicationJsonErrorDescriptionEnum || (exports.Tetms502ApplicationJsonErrorDescriptionEnum = {}));
var Tetms502ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetms502ApplicationJson, _super);
    function Tetms502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetms502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetms502ApplicationJson.prototype, "errorDescription", void 0);
    return Tetms502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tetms502ApplicationJson = Tetms502ApplicationJson;
var Tetms503ApplicationJsonErrorEnum;
(function (Tetms503ApplicationJsonErrorEnum) {
    Tetms503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Tetms503ApplicationJsonErrorEnum = exports.Tetms503ApplicationJsonErrorEnum || (exports.Tetms503ApplicationJsonErrorEnum = {}));
var Tetms503ApplicationJsonErrorDescriptionEnum;
(function (Tetms503ApplicationJsonErrorDescriptionEnum) {
    Tetms503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Tetms503ApplicationJsonErrorDescriptionEnum = exports.Tetms503ApplicationJsonErrorDescriptionEnum || (exports.Tetms503ApplicationJsonErrorDescriptionEnum = {}));
var Tetms503ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetms503ApplicationJson, _super);
    function Tetms503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetms503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetms503ApplicationJson.prototype, "errorDescription", void 0);
    return Tetms503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tetms503ApplicationJson = Tetms503ApplicationJson;
var Tetms504ApplicationJsonErrorEnum;
(function (Tetms504ApplicationJsonErrorEnum) {
    Tetms504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Tetms504ApplicationJsonErrorEnum = exports.Tetms504ApplicationJsonErrorEnum || (exports.Tetms504ApplicationJsonErrorEnum = {}));
var Tetms504ApplicationJsonErrorDescriptionEnum;
(function (Tetms504ApplicationJsonErrorDescriptionEnum) {
    Tetms504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Tetms504ApplicationJsonErrorDescriptionEnum = exports.Tetms504ApplicationJsonErrorDescriptionEnum || (exports.Tetms504ApplicationJsonErrorDescriptionEnum = {}));
var Tetms504ApplicationJson = /** @class */ (function (_super) {
    __extends(Tetms504ApplicationJson, _super);
    function Tetms504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Tetms504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Tetms504ApplicationJson.prototype, "errorDescription", void 0);
    return Tetms504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Tetms504ApplicationJson = Tetms504ApplicationJson;
var TetmsRequest = /** @class */ (function (_super) {
    __extends(TetmsRequest, _super);
    function TetmsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", TetmsRequestBody)
    ], TetmsRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TetmsSecurity)
    ], TetmsRequest.prototype, "security", void 0);
    return TetmsRequest;
}(utils_1.SpeakeasyBase));
exports.TetmsRequest = TetmsRequest;
var TetmsResponse = /** @class */ (function (_super) {
    __extends(TetmsResponse, _super);
    function TetmsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TetmsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TetmsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tetms400ApplicationJson)
    ], TetmsResponse.prototype, "tetms400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tetms401ApplicationJson)
    ], TetmsResponse.prototype, "tetms401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tetms404ApplicationJson)
    ], TetmsResponse.prototype, "tetms404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tetms500ApplicationJson)
    ], TetmsResponse.prototype, "tetms500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tetms502ApplicationJson)
    ], TetmsResponse.prototype, "tetms502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tetms503ApplicationJson)
    ], TetmsResponse.prototype, "tetms503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Tetms504ApplicationJson)
    ], TetmsResponse.prototype, "tetms504ApplicationJSONObject", void 0);
    return TetmsResponse;
}(utils_1.SpeakeasyBase));
exports.TetmsResponse = TetmsResponse;
