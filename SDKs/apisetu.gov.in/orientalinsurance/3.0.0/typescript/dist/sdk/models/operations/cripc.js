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
exports.CripcResponse = exports.CripcRequest = exports.Cripc504ApplicationJson = exports.Cripc504ApplicationJsonErrorDescriptionEnum = exports.Cripc504ApplicationJsonErrorEnum = exports.Cripc503ApplicationJson = exports.Cripc503ApplicationJsonErrorDescriptionEnum = exports.Cripc503ApplicationJsonErrorEnum = exports.Cripc502ApplicationJson = exports.Cripc502ApplicationJsonErrorDescriptionEnum = exports.Cripc502ApplicationJsonErrorEnum = exports.Cripc500ApplicationJson = exports.Cripc500ApplicationJsonErrorDescriptionEnum = exports.Cripc500ApplicationJsonErrorEnum = exports.Cripc404ApplicationJson = exports.Cripc404ApplicationJsonErrorDescriptionEnum = exports.Cripc404ApplicationJsonErrorEnum = exports.Cripc401ApplicationJson = exports.Cripc401ApplicationJsonErrorDescriptionEnum = exports.Cripc401ApplicationJsonErrorEnum = exports.Cripc400ApplicationJson = exports.Cripc400ApplicationJsonErrorDescriptionEnum = exports.Cripc400ApplicationJsonErrorEnum = exports.CripcSecurity = exports.CripcRequestBody = exports.CripcRequestBodyFormatEnum = exports.CripcRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CripcRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(CripcRequestBodyCertificateParameters, _super);
    function CripcRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=INSCODE" }),
        __metadata("design:type", String)
    ], CripcRequestBodyCertificateParameters.prototype, "inscode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=POLNO" }),
        __metadata("design:type", String)
    ], CripcRequestBodyCertificateParameters.prototype, "polno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=STARTDT" }),
        __metadata("design:type", String)
    ], CripcRequestBodyCertificateParameters.prototype, "startdt", void 0);
    return CripcRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.CripcRequestBodyCertificateParameters = CripcRequestBodyCertificateParameters;
var CripcRequestBodyFormatEnum;
(function (CripcRequestBodyFormatEnum) {
    CripcRequestBodyFormatEnum["Pdf"] = "pdf";
})(CripcRequestBodyFormatEnum = exports.CripcRequestBodyFormatEnum || (exports.CripcRequestBodyFormatEnum = {}));
var CripcRequestBody = /** @class */ (function (_super) {
    __extends(CripcRequestBody, _super);
    function CripcRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", CripcRequestBodyCertificateParameters)
    ], CripcRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], CripcRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], CripcRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], CripcRequestBody.prototype, "txnId", void 0);
    return CripcRequestBody;
}(utils_1.SpeakeasyBase));
exports.CripcRequestBody = CripcRequestBody;
var CripcSecurity = /** @class */ (function (_super) {
    __extends(CripcSecurity, _super);
    function CripcSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], CripcSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], CripcSecurity.prototype, "clientId", void 0);
    return CripcSecurity;
}(utils_1.SpeakeasyBase));
exports.CripcSecurity = CripcSecurity;
var Cripc400ApplicationJsonErrorEnum;
(function (Cripc400ApplicationJsonErrorEnum) {
    Cripc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Cripc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Cripc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Cripc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Cripc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Cripc400ApplicationJsonErrorEnum = exports.Cripc400ApplicationJsonErrorEnum || (exports.Cripc400ApplicationJsonErrorEnum = {}));
var Cripc400ApplicationJsonErrorDescriptionEnum;
(function (Cripc400ApplicationJsonErrorDescriptionEnum) {
    Cripc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Cripc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Cripc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Cripc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Cripc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Cripc400ApplicationJsonErrorDescriptionEnum = exports.Cripc400ApplicationJsonErrorDescriptionEnum || (exports.Cripc400ApplicationJsonErrorDescriptionEnum = {}));
var Cripc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Cripc400ApplicationJson, _super);
    function Cripc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cripc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cripc400ApplicationJson.prototype, "errorDescription", void 0);
    return Cripc400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cripc400ApplicationJson = Cripc400ApplicationJson;
var Cripc401ApplicationJsonErrorEnum;
(function (Cripc401ApplicationJsonErrorEnum) {
    Cripc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Cripc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Cripc401ApplicationJsonErrorEnum = exports.Cripc401ApplicationJsonErrorEnum || (exports.Cripc401ApplicationJsonErrorEnum = {}));
var Cripc401ApplicationJsonErrorDescriptionEnum;
(function (Cripc401ApplicationJsonErrorDescriptionEnum) {
    Cripc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Cripc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Cripc401ApplicationJsonErrorDescriptionEnum = exports.Cripc401ApplicationJsonErrorDescriptionEnum || (exports.Cripc401ApplicationJsonErrorDescriptionEnum = {}));
var Cripc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Cripc401ApplicationJson, _super);
    function Cripc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cripc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cripc401ApplicationJson.prototype, "errorDescription", void 0);
    return Cripc401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cripc401ApplicationJson = Cripc401ApplicationJson;
var Cripc404ApplicationJsonErrorEnum;
(function (Cripc404ApplicationJsonErrorEnum) {
    Cripc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Cripc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Cripc404ApplicationJsonErrorEnum = exports.Cripc404ApplicationJsonErrorEnum || (exports.Cripc404ApplicationJsonErrorEnum = {}));
var Cripc404ApplicationJsonErrorDescriptionEnum;
(function (Cripc404ApplicationJsonErrorDescriptionEnum) {
    Cripc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Cripc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Cripc404ApplicationJsonErrorDescriptionEnum = exports.Cripc404ApplicationJsonErrorDescriptionEnum || (exports.Cripc404ApplicationJsonErrorDescriptionEnum = {}));
var Cripc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Cripc404ApplicationJson, _super);
    function Cripc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cripc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cripc404ApplicationJson.prototype, "errorDescription", void 0);
    return Cripc404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cripc404ApplicationJson = Cripc404ApplicationJson;
var Cripc500ApplicationJsonErrorEnum;
(function (Cripc500ApplicationJsonErrorEnum) {
    Cripc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Cripc500ApplicationJsonErrorEnum = exports.Cripc500ApplicationJsonErrorEnum || (exports.Cripc500ApplicationJsonErrorEnum = {}));
var Cripc500ApplicationJsonErrorDescriptionEnum;
(function (Cripc500ApplicationJsonErrorDescriptionEnum) {
    Cripc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Cripc500ApplicationJsonErrorDescriptionEnum = exports.Cripc500ApplicationJsonErrorDescriptionEnum || (exports.Cripc500ApplicationJsonErrorDescriptionEnum = {}));
var Cripc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Cripc500ApplicationJson, _super);
    function Cripc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cripc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cripc500ApplicationJson.prototype, "errorDescription", void 0);
    return Cripc500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cripc500ApplicationJson = Cripc500ApplicationJson;
var Cripc502ApplicationJsonErrorEnum;
(function (Cripc502ApplicationJsonErrorEnum) {
    Cripc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Cripc502ApplicationJsonErrorEnum = exports.Cripc502ApplicationJsonErrorEnum || (exports.Cripc502ApplicationJsonErrorEnum = {}));
var Cripc502ApplicationJsonErrorDescriptionEnum;
(function (Cripc502ApplicationJsonErrorDescriptionEnum) {
    Cripc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Cripc502ApplicationJsonErrorDescriptionEnum = exports.Cripc502ApplicationJsonErrorDescriptionEnum || (exports.Cripc502ApplicationJsonErrorDescriptionEnum = {}));
var Cripc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Cripc502ApplicationJson, _super);
    function Cripc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cripc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cripc502ApplicationJson.prototype, "errorDescription", void 0);
    return Cripc502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cripc502ApplicationJson = Cripc502ApplicationJson;
var Cripc503ApplicationJsonErrorEnum;
(function (Cripc503ApplicationJsonErrorEnum) {
    Cripc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Cripc503ApplicationJsonErrorEnum = exports.Cripc503ApplicationJsonErrorEnum || (exports.Cripc503ApplicationJsonErrorEnum = {}));
var Cripc503ApplicationJsonErrorDescriptionEnum;
(function (Cripc503ApplicationJsonErrorDescriptionEnum) {
    Cripc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Cripc503ApplicationJsonErrorDescriptionEnum = exports.Cripc503ApplicationJsonErrorDescriptionEnum || (exports.Cripc503ApplicationJsonErrorDescriptionEnum = {}));
var Cripc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Cripc503ApplicationJson, _super);
    function Cripc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cripc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cripc503ApplicationJson.prototype, "errorDescription", void 0);
    return Cripc503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cripc503ApplicationJson = Cripc503ApplicationJson;
var Cripc504ApplicationJsonErrorEnum;
(function (Cripc504ApplicationJsonErrorEnum) {
    Cripc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Cripc504ApplicationJsonErrorEnum = exports.Cripc504ApplicationJsonErrorEnum || (exports.Cripc504ApplicationJsonErrorEnum = {}));
var Cripc504ApplicationJsonErrorDescriptionEnum;
(function (Cripc504ApplicationJsonErrorDescriptionEnum) {
    Cripc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Cripc504ApplicationJsonErrorDescriptionEnum = exports.Cripc504ApplicationJsonErrorDescriptionEnum || (exports.Cripc504ApplicationJsonErrorDescriptionEnum = {}));
var Cripc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Cripc504ApplicationJson, _super);
    function Cripc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cripc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cripc504ApplicationJson.prototype, "errorDescription", void 0);
    return Cripc504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cripc504ApplicationJson = Cripc504ApplicationJson;
var CripcRequest = /** @class */ (function (_super) {
    __extends(CripcRequest, _super);
    function CripcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CripcRequestBody)
    ], CripcRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CripcSecurity)
    ], CripcRequest.prototype, "security", void 0);
    return CripcRequest;
}(utils_1.SpeakeasyBase));
exports.CripcRequest = CripcRequest;
var CripcResponse = /** @class */ (function (_super) {
    __extends(CripcResponse, _super);
    function CripcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CripcResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CripcResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cripc400ApplicationJson)
    ], CripcResponse.prototype, "cripc400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cripc401ApplicationJson)
    ], CripcResponse.prototype, "cripc401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cripc404ApplicationJson)
    ], CripcResponse.prototype, "cripc404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cripc500ApplicationJson)
    ], CripcResponse.prototype, "cripc500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cripc502ApplicationJson)
    ], CripcResponse.prototype, "cripc502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cripc503ApplicationJson)
    ], CripcResponse.prototype, "cripc503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cripc504ApplicationJson)
    ], CripcResponse.prototype, "cripc504ApplicationJSONObject", void 0);
    return CripcResponse;
}(utils_1.SpeakeasyBase));
exports.CripcResponse = CripcResponse;
