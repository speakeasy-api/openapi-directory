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
exports.HmipcResponse = exports.HmipcRequest = exports.Hmipc504ApplicationJson = exports.Hmipc504ApplicationJsonErrorDescriptionEnum = exports.Hmipc504ApplicationJsonErrorEnum = exports.Hmipc503ApplicationJson = exports.Hmipc503ApplicationJsonErrorDescriptionEnum = exports.Hmipc503ApplicationJsonErrorEnum = exports.Hmipc502ApplicationJson = exports.Hmipc502ApplicationJsonErrorDescriptionEnum = exports.Hmipc502ApplicationJsonErrorEnum = exports.Hmipc500ApplicationJson = exports.Hmipc500ApplicationJsonErrorDescriptionEnum = exports.Hmipc500ApplicationJsonErrorEnum = exports.Hmipc404ApplicationJson = exports.Hmipc404ApplicationJsonErrorDescriptionEnum = exports.Hmipc404ApplicationJsonErrorEnum = exports.Hmipc401ApplicationJson = exports.Hmipc401ApplicationJsonErrorDescriptionEnum = exports.Hmipc401ApplicationJsonErrorEnum = exports.Hmipc400ApplicationJson = exports.Hmipc400ApplicationJsonErrorDescriptionEnum = exports.Hmipc400ApplicationJsonErrorEnum = exports.HmipcSecurity = exports.HmipcRequestBody = exports.HmipcRequestBodyFormatEnum = exports.HmipcRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var HmipcRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(HmipcRequestBodyCertificateParameters, _super);
    function HmipcRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=INSCODE" }),
        __metadata("design:type", String)
    ], HmipcRequestBodyCertificateParameters.prototype, "inscode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=POLNO" }),
        __metadata("design:type", String)
    ], HmipcRequestBodyCertificateParameters.prototype, "polno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=STARTDT" }),
        __metadata("design:type", String)
    ], HmipcRequestBodyCertificateParameters.prototype, "startdt", void 0);
    return HmipcRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.HmipcRequestBodyCertificateParameters = HmipcRequestBodyCertificateParameters;
var HmipcRequestBodyFormatEnum;
(function (HmipcRequestBodyFormatEnum) {
    HmipcRequestBodyFormatEnum["Pdf"] = "pdf";
})(HmipcRequestBodyFormatEnum = exports.HmipcRequestBodyFormatEnum || (exports.HmipcRequestBodyFormatEnum = {}));
var HmipcRequestBody = /** @class */ (function (_super) {
    __extends(HmipcRequestBody, _super);
    function HmipcRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", HmipcRequestBodyCertificateParameters)
    ], HmipcRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], HmipcRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], HmipcRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], HmipcRequestBody.prototype, "txnId", void 0);
    return HmipcRequestBody;
}(utils_1.SpeakeasyBase));
exports.HmipcRequestBody = HmipcRequestBody;
var HmipcSecurity = /** @class */ (function (_super) {
    __extends(HmipcSecurity, _super);
    function HmipcSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], HmipcSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], HmipcSecurity.prototype, "clientId", void 0);
    return HmipcSecurity;
}(utils_1.SpeakeasyBase));
exports.HmipcSecurity = HmipcSecurity;
var Hmipc400ApplicationJsonErrorEnum;
(function (Hmipc400ApplicationJsonErrorEnum) {
    Hmipc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Hmipc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Hmipc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Hmipc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Hmipc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Hmipc400ApplicationJsonErrorEnum = exports.Hmipc400ApplicationJsonErrorEnum || (exports.Hmipc400ApplicationJsonErrorEnum = {}));
var Hmipc400ApplicationJsonErrorDescriptionEnum;
(function (Hmipc400ApplicationJsonErrorDescriptionEnum) {
    Hmipc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Hmipc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Hmipc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Hmipc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Hmipc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Hmipc400ApplicationJsonErrorDescriptionEnum = exports.Hmipc400ApplicationJsonErrorDescriptionEnum || (exports.Hmipc400ApplicationJsonErrorDescriptionEnum = {}));
var Hmipc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Hmipc400ApplicationJson, _super);
    function Hmipc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hmipc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hmipc400ApplicationJson.prototype, "errorDescription", void 0);
    return Hmipc400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hmipc400ApplicationJson = Hmipc400ApplicationJson;
var Hmipc401ApplicationJsonErrorEnum;
(function (Hmipc401ApplicationJsonErrorEnum) {
    Hmipc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Hmipc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Hmipc401ApplicationJsonErrorEnum = exports.Hmipc401ApplicationJsonErrorEnum || (exports.Hmipc401ApplicationJsonErrorEnum = {}));
var Hmipc401ApplicationJsonErrorDescriptionEnum;
(function (Hmipc401ApplicationJsonErrorDescriptionEnum) {
    Hmipc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Hmipc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Hmipc401ApplicationJsonErrorDescriptionEnum = exports.Hmipc401ApplicationJsonErrorDescriptionEnum || (exports.Hmipc401ApplicationJsonErrorDescriptionEnum = {}));
var Hmipc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Hmipc401ApplicationJson, _super);
    function Hmipc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hmipc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hmipc401ApplicationJson.prototype, "errorDescription", void 0);
    return Hmipc401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hmipc401ApplicationJson = Hmipc401ApplicationJson;
var Hmipc404ApplicationJsonErrorEnum;
(function (Hmipc404ApplicationJsonErrorEnum) {
    Hmipc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Hmipc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Hmipc404ApplicationJsonErrorEnum = exports.Hmipc404ApplicationJsonErrorEnum || (exports.Hmipc404ApplicationJsonErrorEnum = {}));
var Hmipc404ApplicationJsonErrorDescriptionEnum;
(function (Hmipc404ApplicationJsonErrorDescriptionEnum) {
    Hmipc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Hmipc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Hmipc404ApplicationJsonErrorDescriptionEnum = exports.Hmipc404ApplicationJsonErrorDescriptionEnum || (exports.Hmipc404ApplicationJsonErrorDescriptionEnum = {}));
var Hmipc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Hmipc404ApplicationJson, _super);
    function Hmipc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hmipc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hmipc404ApplicationJson.prototype, "errorDescription", void 0);
    return Hmipc404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hmipc404ApplicationJson = Hmipc404ApplicationJson;
var Hmipc500ApplicationJsonErrorEnum;
(function (Hmipc500ApplicationJsonErrorEnum) {
    Hmipc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Hmipc500ApplicationJsonErrorEnum = exports.Hmipc500ApplicationJsonErrorEnum || (exports.Hmipc500ApplicationJsonErrorEnum = {}));
var Hmipc500ApplicationJsonErrorDescriptionEnum;
(function (Hmipc500ApplicationJsonErrorDescriptionEnum) {
    Hmipc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Hmipc500ApplicationJsonErrorDescriptionEnum = exports.Hmipc500ApplicationJsonErrorDescriptionEnum || (exports.Hmipc500ApplicationJsonErrorDescriptionEnum = {}));
var Hmipc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Hmipc500ApplicationJson, _super);
    function Hmipc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hmipc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hmipc500ApplicationJson.prototype, "errorDescription", void 0);
    return Hmipc500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hmipc500ApplicationJson = Hmipc500ApplicationJson;
var Hmipc502ApplicationJsonErrorEnum;
(function (Hmipc502ApplicationJsonErrorEnum) {
    Hmipc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Hmipc502ApplicationJsonErrorEnum = exports.Hmipc502ApplicationJsonErrorEnum || (exports.Hmipc502ApplicationJsonErrorEnum = {}));
var Hmipc502ApplicationJsonErrorDescriptionEnum;
(function (Hmipc502ApplicationJsonErrorDescriptionEnum) {
    Hmipc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Hmipc502ApplicationJsonErrorDescriptionEnum = exports.Hmipc502ApplicationJsonErrorDescriptionEnum || (exports.Hmipc502ApplicationJsonErrorDescriptionEnum = {}));
var Hmipc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Hmipc502ApplicationJson, _super);
    function Hmipc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hmipc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hmipc502ApplicationJson.prototype, "errorDescription", void 0);
    return Hmipc502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hmipc502ApplicationJson = Hmipc502ApplicationJson;
var Hmipc503ApplicationJsonErrorEnum;
(function (Hmipc503ApplicationJsonErrorEnum) {
    Hmipc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Hmipc503ApplicationJsonErrorEnum = exports.Hmipc503ApplicationJsonErrorEnum || (exports.Hmipc503ApplicationJsonErrorEnum = {}));
var Hmipc503ApplicationJsonErrorDescriptionEnum;
(function (Hmipc503ApplicationJsonErrorDescriptionEnum) {
    Hmipc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Hmipc503ApplicationJsonErrorDescriptionEnum = exports.Hmipc503ApplicationJsonErrorDescriptionEnum || (exports.Hmipc503ApplicationJsonErrorDescriptionEnum = {}));
var Hmipc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Hmipc503ApplicationJson, _super);
    function Hmipc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hmipc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hmipc503ApplicationJson.prototype, "errorDescription", void 0);
    return Hmipc503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hmipc503ApplicationJson = Hmipc503ApplicationJson;
var Hmipc504ApplicationJsonErrorEnum;
(function (Hmipc504ApplicationJsonErrorEnum) {
    Hmipc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Hmipc504ApplicationJsonErrorEnum = exports.Hmipc504ApplicationJsonErrorEnum || (exports.Hmipc504ApplicationJsonErrorEnum = {}));
var Hmipc504ApplicationJsonErrorDescriptionEnum;
(function (Hmipc504ApplicationJsonErrorDescriptionEnum) {
    Hmipc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Hmipc504ApplicationJsonErrorDescriptionEnum = exports.Hmipc504ApplicationJsonErrorDescriptionEnum || (exports.Hmipc504ApplicationJsonErrorDescriptionEnum = {}));
var Hmipc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Hmipc504ApplicationJson, _super);
    function Hmipc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hmipc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hmipc504ApplicationJson.prototype, "errorDescription", void 0);
    return Hmipc504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hmipc504ApplicationJson = Hmipc504ApplicationJson;
var HmipcRequest = /** @class */ (function (_super) {
    __extends(HmipcRequest, _super);
    function HmipcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", HmipcRequestBody)
    ], HmipcRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", HmipcSecurity)
    ], HmipcRequest.prototype, "security", void 0);
    return HmipcRequest;
}(utils_1.SpeakeasyBase));
exports.HmipcRequest = HmipcRequest;
var HmipcResponse = /** @class */ (function (_super) {
    __extends(HmipcResponse, _super);
    function HmipcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], HmipcResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], HmipcResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hmipc400ApplicationJson)
    ], HmipcResponse.prototype, "hmipc400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hmipc401ApplicationJson)
    ], HmipcResponse.prototype, "hmipc401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hmipc404ApplicationJson)
    ], HmipcResponse.prototype, "hmipc404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hmipc500ApplicationJson)
    ], HmipcResponse.prototype, "hmipc500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hmipc502ApplicationJson)
    ], HmipcResponse.prototype, "hmipc502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hmipc503ApplicationJson)
    ], HmipcResponse.prototype, "hmipc503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hmipc504ApplicationJson)
    ], HmipcResponse.prototype, "hmipc504ApplicationJSONObject", void 0);
    return HmipcResponse;
}(utils_1.SpeakeasyBase));
exports.HmipcResponse = HmipcResponse;
