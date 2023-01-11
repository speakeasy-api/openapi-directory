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
exports.PripcResponse = exports.PripcRequest = exports.Pripc504ApplicationJson = exports.Pripc504ApplicationJsonErrorDescriptionEnum = exports.Pripc504ApplicationJsonErrorEnum = exports.Pripc503ApplicationJson = exports.Pripc503ApplicationJsonErrorDescriptionEnum = exports.Pripc503ApplicationJsonErrorEnum = exports.Pripc502ApplicationJson = exports.Pripc502ApplicationJsonErrorDescriptionEnum = exports.Pripc502ApplicationJsonErrorEnum = exports.Pripc500ApplicationJson = exports.Pripc500ApplicationJsonErrorDescriptionEnum = exports.Pripc500ApplicationJsonErrorEnum = exports.Pripc404ApplicationJson = exports.Pripc404ApplicationJsonErrorDescriptionEnum = exports.Pripc404ApplicationJsonErrorEnum = exports.Pripc401ApplicationJson = exports.Pripc401ApplicationJsonErrorDescriptionEnum = exports.Pripc401ApplicationJsonErrorEnum = exports.Pripc400ApplicationJson = exports.Pripc400ApplicationJsonErrorDescriptionEnum = exports.Pripc400ApplicationJsonErrorEnum = exports.PripcSecurity = exports.PripcRequestBody = exports.PripcRequestBodyFormatEnum = exports.PripcRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PripcRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(PripcRequestBodyCertificateParameters, _super);
    function PripcRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=INSCODE" }),
        __metadata("design:type", String)
    ], PripcRequestBodyCertificateParameters.prototype, "inscode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=POLNO" }),
        __metadata("design:type", String)
    ], PripcRequestBodyCertificateParameters.prototype, "polno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=STARTDT" }),
        __metadata("design:type", String)
    ], PripcRequestBodyCertificateParameters.prototype, "startdt", void 0);
    return PripcRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.PripcRequestBodyCertificateParameters = PripcRequestBodyCertificateParameters;
var PripcRequestBodyFormatEnum;
(function (PripcRequestBodyFormatEnum) {
    PripcRequestBodyFormatEnum["Pdf"] = "pdf";
})(PripcRequestBodyFormatEnum = exports.PripcRequestBodyFormatEnum || (exports.PripcRequestBodyFormatEnum = {}));
var PripcRequestBody = /** @class */ (function (_super) {
    __extends(PripcRequestBody, _super);
    function PripcRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", PripcRequestBodyCertificateParameters)
    ], PripcRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], PripcRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PripcRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], PripcRequestBody.prototype, "txnId", void 0);
    return PripcRequestBody;
}(utils_1.SpeakeasyBase));
exports.PripcRequestBody = PripcRequestBody;
var PripcSecurity = /** @class */ (function (_super) {
    __extends(PripcSecurity, _super);
    function PripcSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PripcSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], PripcSecurity.prototype, "clientId", void 0);
    return PripcSecurity;
}(utils_1.SpeakeasyBase));
exports.PripcSecurity = PripcSecurity;
var Pripc400ApplicationJsonErrorEnum;
(function (Pripc400ApplicationJsonErrorEnum) {
    Pripc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Pripc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Pripc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Pripc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Pripc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Pripc400ApplicationJsonErrorEnum = exports.Pripc400ApplicationJsonErrorEnum || (exports.Pripc400ApplicationJsonErrorEnum = {}));
var Pripc400ApplicationJsonErrorDescriptionEnum;
(function (Pripc400ApplicationJsonErrorDescriptionEnum) {
    Pripc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Pripc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Pripc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Pripc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Pripc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Pripc400ApplicationJsonErrorDescriptionEnum = exports.Pripc400ApplicationJsonErrorDescriptionEnum || (exports.Pripc400ApplicationJsonErrorDescriptionEnum = {}));
var Pripc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Pripc400ApplicationJson, _super);
    function Pripc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pripc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pripc400ApplicationJson.prototype, "errorDescription", void 0);
    return Pripc400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pripc400ApplicationJson = Pripc400ApplicationJson;
var Pripc401ApplicationJsonErrorEnum;
(function (Pripc401ApplicationJsonErrorEnum) {
    Pripc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Pripc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Pripc401ApplicationJsonErrorEnum = exports.Pripc401ApplicationJsonErrorEnum || (exports.Pripc401ApplicationJsonErrorEnum = {}));
var Pripc401ApplicationJsonErrorDescriptionEnum;
(function (Pripc401ApplicationJsonErrorDescriptionEnum) {
    Pripc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Pripc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Pripc401ApplicationJsonErrorDescriptionEnum = exports.Pripc401ApplicationJsonErrorDescriptionEnum || (exports.Pripc401ApplicationJsonErrorDescriptionEnum = {}));
var Pripc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Pripc401ApplicationJson, _super);
    function Pripc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pripc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pripc401ApplicationJson.prototype, "errorDescription", void 0);
    return Pripc401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pripc401ApplicationJson = Pripc401ApplicationJson;
var Pripc404ApplicationJsonErrorEnum;
(function (Pripc404ApplicationJsonErrorEnum) {
    Pripc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Pripc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Pripc404ApplicationJsonErrorEnum = exports.Pripc404ApplicationJsonErrorEnum || (exports.Pripc404ApplicationJsonErrorEnum = {}));
var Pripc404ApplicationJsonErrorDescriptionEnum;
(function (Pripc404ApplicationJsonErrorDescriptionEnum) {
    Pripc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Pripc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Pripc404ApplicationJsonErrorDescriptionEnum = exports.Pripc404ApplicationJsonErrorDescriptionEnum || (exports.Pripc404ApplicationJsonErrorDescriptionEnum = {}));
var Pripc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Pripc404ApplicationJson, _super);
    function Pripc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pripc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pripc404ApplicationJson.prototype, "errorDescription", void 0);
    return Pripc404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pripc404ApplicationJson = Pripc404ApplicationJson;
var Pripc500ApplicationJsonErrorEnum;
(function (Pripc500ApplicationJsonErrorEnum) {
    Pripc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Pripc500ApplicationJsonErrorEnum = exports.Pripc500ApplicationJsonErrorEnum || (exports.Pripc500ApplicationJsonErrorEnum = {}));
var Pripc500ApplicationJsonErrorDescriptionEnum;
(function (Pripc500ApplicationJsonErrorDescriptionEnum) {
    Pripc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Pripc500ApplicationJsonErrorDescriptionEnum = exports.Pripc500ApplicationJsonErrorDescriptionEnum || (exports.Pripc500ApplicationJsonErrorDescriptionEnum = {}));
var Pripc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Pripc500ApplicationJson, _super);
    function Pripc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pripc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pripc500ApplicationJson.prototype, "errorDescription", void 0);
    return Pripc500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pripc500ApplicationJson = Pripc500ApplicationJson;
var Pripc502ApplicationJsonErrorEnum;
(function (Pripc502ApplicationJsonErrorEnum) {
    Pripc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Pripc502ApplicationJsonErrorEnum = exports.Pripc502ApplicationJsonErrorEnum || (exports.Pripc502ApplicationJsonErrorEnum = {}));
var Pripc502ApplicationJsonErrorDescriptionEnum;
(function (Pripc502ApplicationJsonErrorDescriptionEnum) {
    Pripc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Pripc502ApplicationJsonErrorDescriptionEnum = exports.Pripc502ApplicationJsonErrorDescriptionEnum || (exports.Pripc502ApplicationJsonErrorDescriptionEnum = {}));
var Pripc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Pripc502ApplicationJson, _super);
    function Pripc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pripc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pripc502ApplicationJson.prototype, "errorDescription", void 0);
    return Pripc502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pripc502ApplicationJson = Pripc502ApplicationJson;
var Pripc503ApplicationJsonErrorEnum;
(function (Pripc503ApplicationJsonErrorEnum) {
    Pripc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Pripc503ApplicationJsonErrorEnum = exports.Pripc503ApplicationJsonErrorEnum || (exports.Pripc503ApplicationJsonErrorEnum = {}));
var Pripc503ApplicationJsonErrorDescriptionEnum;
(function (Pripc503ApplicationJsonErrorDescriptionEnum) {
    Pripc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Pripc503ApplicationJsonErrorDescriptionEnum = exports.Pripc503ApplicationJsonErrorDescriptionEnum || (exports.Pripc503ApplicationJsonErrorDescriptionEnum = {}));
var Pripc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Pripc503ApplicationJson, _super);
    function Pripc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pripc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pripc503ApplicationJson.prototype, "errorDescription", void 0);
    return Pripc503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pripc503ApplicationJson = Pripc503ApplicationJson;
var Pripc504ApplicationJsonErrorEnum;
(function (Pripc504ApplicationJsonErrorEnum) {
    Pripc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Pripc504ApplicationJsonErrorEnum = exports.Pripc504ApplicationJsonErrorEnum || (exports.Pripc504ApplicationJsonErrorEnum = {}));
var Pripc504ApplicationJsonErrorDescriptionEnum;
(function (Pripc504ApplicationJsonErrorDescriptionEnum) {
    Pripc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Pripc504ApplicationJsonErrorDescriptionEnum = exports.Pripc504ApplicationJsonErrorDescriptionEnum || (exports.Pripc504ApplicationJsonErrorDescriptionEnum = {}));
var Pripc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Pripc504ApplicationJson, _super);
    function Pripc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pripc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pripc504ApplicationJson.prototype, "errorDescription", void 0);
    return Pripc504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pripc504ApplicationJson = Pripc504ApplicationJson;
var PripcRequest = /** @class */ (function (_super) {
    __extends(PripcRequest, _super);
    function PripcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PripcRequestBody)
    ], PripcRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PripcSecurity)
    ], PripcRequest.prototype, "security", void 0);
    return PripcRequest;
}(utils_1.SpeakeasyBase));
exports.PripcRequest = PripcRequest;
var PripcResponse = /** @class */ (function (_super) {
    __extends(PripcResponse, _super);
    function PripcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PripcResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PripcResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pripc400ApplicationJson)
    ], PripcResponse.prototype, "pripc400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pripc401ApplicationJson)
    ], PripcResponse.prototype, "pripc401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pripc404ApplicationJson)
    ], PripcResponse.prototype, "pripc404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pripc500ApplicationJson)
    ], PripcResponse.prototype, "pripc500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pripc502ApplicationJson)
    ], PripcResponse.prototype, "pripc502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pripc503ApplicationJson)
    ], PripcResponse.prototype, "pripc503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pripc504ApplicationJson)
    ], PripcResponse.prototype, "pripc504ApplicationJSONObject", void 0);
    return PripcResponse;
}(utils_1.SpeakeasyBase));
exports.PripcResponse = PripcResponse;
