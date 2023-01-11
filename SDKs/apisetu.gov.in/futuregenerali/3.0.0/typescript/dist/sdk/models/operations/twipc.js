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
exports.TwipcResponse = exports.TwipcRequest = exports.Twipc504ApplicationJson = exports.Twipc504ApplicationJsonErrorDescriptionEnum = exports.Twipc504ApplicationJsonErrorEnum = exports.Twipc503ApplicationJson = exports.Twipc503ApplicationJsonErrorDescriptionEnum = exports.Twipc503ApplicationJsonErrorEnum = exports.Twipc502ApplicationJson = exports.Twipc502ApplicationJsonErrorDescriptionEnum = exports.Twipc502ApplicationJsonErrorEnum = exports.Twipc500ApplicationJson = exports.Twipc500ApplicationJsonErrorDescriptionEnum = exports.Twipc500ApplicationJsonErrorEnum = exports.Twipc404ApplicationJson = exports.Twipc404ApplicationJsonErrorDescriptionEnum = exports.Twipc404ApplicationJsonErrorEnum = exports.Twipc401ApplicationJson = exports.Twipc401ApplicationJsonErrorDescriptionEnum = exports.Twipc401ApplicationJsonErrorEnum = exports.Twipc400ApplicationJson = exports.Twipc400ApplicationJsonErrorDescriptionEnum = exports.Twipc400ApplicationJsonErrorEnum = exports.TwipcSecurity = exports.TwipcRequestBody = exports.TwipcRequestBodyFormatEnum = exports.TwipcRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TwipcRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(TwipcRequestBodyCertificateParameters, _super);
    function TwipcRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], TwipcRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policyno" }),
        __metadata("design:type", String)
    ], TwipcRequestBodyCertificateParameters.prototype, "policyno", void 0);
    return TwipcRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.TwipcRequestBodyCertificateParameters = TwipcRequestBodyCertificateParameters;
var TwipcRequestBodyFormatEnum;
(function (TwipcRequestBodyFormatEnum) {
    TwipcRequestBodyFormatEnum["Pdf"] = "pdf";
})(TwipcRequestBodyFormatEnum = exports.TwipcRequestBodyFormatEnum || (exports.TwipcRequestBodyFormatEnum = {}));
var TwipcRequestBody = /** @class */ (function (_super) {
    __extends(TwipcRequestBody, _super);
    function TwipcRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", TwipcRequestBodyCertificateParameters)
    ], TwipcRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], TwipcRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], TwipcRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], TwipcRequestBody.prototype, "txnId", void 0);
    return TwipcRequestBody;
}(utils_1.SpeakeasyBase));
exports.TwipcRequestBody = TwipcRequestBody;
var TwipcSecurity = /** @class */ (function (_super) {
    __extends(TwipcSecurity, _super);
    function TwipcSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], TwipcSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], TwipcSecurity.prototype, "clientId", void 0);
    return TwipcSecurity;
}(utils_1.SpeakeasyBase));
exports.TwipcSecurity = TwipcSecurity;
var Twipc400ApplicationJsonErrorEnum;
(function (Twipc400ApplicationJsonErrorEnum) {
    Twipc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Twipc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Twipc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Twipc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Twipc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Twipc400ApplicationJsonErrorEnum = exports.Twipc400ApplicationJsonErrorEnum || (exports.Twipc400ApplicationJsonErrorEnum = {}));
var Twipc400ApplicationJsonErrorDescriptionEnum;
(function (Twipc400ApplicationJsonErrorDescriptionEnum) {
    Twipc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Twipc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Twipc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Twipc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Twipc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Twipc400ApplicationJsonErrorDescriptionEnum = exports.Twipc400ApplicationJsonErrorDescriptionEnum || (exports.Twipc400ApplicationJsonErrorDescriptionEnum = {}));
var Twipc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Twipc400ApplicationJson, _super);
    function Twipc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Twipc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Twipc400ApplicationJson.prototype, "errorDescription", void 0);
    return Twipc400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Twipc400ApplicationJson = Twipc400ApplicationJson;
var Twipc401ApplicationJsonErrorEnum;
(function (Twipc401ApplicationJsonErrorEnum) {
    Twipc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Twipc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Twipc401ApplicationJsonErrorEnum = exports.Twipc401ApplicationJsonErrorEnum || (exports.Twipc401ApplicationJsonErrorEnum = {}));
var Twipc401ApplicationJsonErrorDescriptionEnum;
(function (Twipc401ApplicationJsonErrorDescriptionEnum) {
    Twipc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Twipc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Twipc401ApplicationJsonErrorDescriptionEnum = exports.Twipc401ApplicationJsonErrorDescriptionEnum || (exports.Twipc401ApplicationJsonErrorDescriptionEnum = {}));
var Twipc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Twipc401ApplicationJson, _super);
    function Twipc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Twipc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Twipc401ApplicationJson.prototype, "errorDescription", void 0);
    return Twipc401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Twipc401ApplicationJson = Twipc401ApplicationJson;
var Twipc404ApplicationJsonErrorEnum;
(function (Twipc404ApplicationJsonErrorEnum) {
    Twipc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Twipc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Twipc404ApplicationJsonErrorEnum = exports.Twipc404ApplicationJsonErrorEnum || (exports.Twipc404ApplicationJsonErrorEnum = {}));
var Twipc404ApplicationJsonErrorDescriptionEnum;
(function (Twipc404ApplicationJsonErrorDescriptionEnum) {
    Twipc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Twipc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Twipc404ApplicationJsonErrorDescriptionEnum = exports.Twipc404ApplicationJsonErrorDescriptionEnum || (exports.Twipc404ApplicationJsonErrorDescriptionEnum = {}));
var Twipc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Twipc404ApplicationJson, _super);
    function Twipc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Twipc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Twipc404ApplicationJson.prototype, "errorDescription", void 0);
    return Twipc404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Twipc404ApplicationJson = Twipc404ApplicationJson;
var Twipc500ApplicationJsonErrorEnum;
(function (Twipc500ApplicationJsonErrorEnum) {
    Twipc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Twipc500ApplicationJsonErrorEnum = exports.Twipc500ApplicationJsonErrorEnum || (exports.Twipc500ApplicationJsonErrorEnum = {}));
var Twipc500ApplicationJsonErrorDescriptionEnum;
(function (Twipc500ApplicationJsonErrorDescriptionEnum) {
    Twipc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Twipc500ApplicationJsonErrorDescriptionEnum = exports.Twipc500ApplicationJsonErrorDescriptionEnum || (exports.Twipc500ApplicationJsonErrorDescriptionEnum = {}));
var Twipc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Twipc500ApplicationJson, _super);
    function Twipc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Twipc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Twipc500ApplicationJson.prototype, "errorDescription", void 0);
    return Twipc500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Twipc500ApplicationJson = Twipc500ApplicationJson;
var Twipc502ApplicationJsonErrorEnum;
(function (Twipc502ApplicationJsonErrorEnum) {
    Twipc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Twipc502ApplicationJsonErrorEnum = exports.Twipc502ApplicationJsonErrorEnum || (exports.Twipc502ApplicationJsonErrorEnum = {}));
var Twipc502ApplicationJsonErrorDescriptionEnum;
(function (Twipc502ApplicationJsonErrorDescriptionEnum) {
    Twipc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Twipc502ApplicationJsonErrorDescriptionEnum = exports.Twipc502ApplicationJsonErrorDescriptionEnum || (exports.Twipc502ApplicationJsonErrorDescriptionEnum = {}));
var Twipc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Twipc502ApplicationJson, _super);
    function Twipc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Twipc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Twipc502ApplicationJson.prototype, "errorDescription", void 0);
    return Twipc502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Twipc502ApplicationJson = Twipc502ApplicationJson;
var Twipc503ApplicationJsonErrorEnum;
(function (Twipc503ApplicationJsonErrorEnum) {
    Twipc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Twipc503ApplicationJsonErrorEnum = exports.Twipc503ApplicationJsonErrorEnum || (exports.Twipc503ApplicationJsonErrorEnum = {}));
var Twipc503ApplicationJsonErrorDescriptionEnum;
(function (Twipc503ApplicationJsonErrorDescriptionEnum) {
    Twipc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Twipc503ApplicationJsonErrorDescriptionEnum = exports.Twipc503ApplicationJsonErrorDescriptionEnum || (exports.Twipc503ApplicationJsonErrorDescriptionEnum = {}));
var Twipc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Twipc503ApplicationJson, _super);
    function Twipc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Twipc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Twipc503ApplicationJson.prototype, "errorDescription", void 0);
    return Twipc503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Twipc503ApplicationJson = Twipc503ApplicationJson;
var Twipc504ApplicationJsonErrorEnum;
(function (Twipc504ApplicationJsonErrorEnum) {
    Twipc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Twipc504ApplicationJsonErrorEnum = exports.Twipc504ApplicationJsonErrorEnum || (exports.Twipc504ApplicationJsonErrorEnum = {}));
var Twipc504ApplicationJsonErrorDescriptionEnum;
(function (Twipc504ApplicationJsonErrorDescriptionEnum) {
    Twipc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Twipc504ApplicationJsonErrorDescriptionEnum = exports.Twipc504ApplicationJsonErrorDescriptionEnum || (exports.Twipc504ApplicationJsonErrorDescriptionEnum = {}));
var Twipc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Twipc504ApplicationJson, _super);
    function Twipc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Twipc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Twipc504ApplicationJson.prototype, "errorDescription", void 0);
    return Twipc504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Twipc504ApplicationJson = Twipc504ApplicationJson;
var TwipcRequest = /** @class */ (function (_super) {
    __extends(TwipcRequest, _super);
    function TwipcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", TwipcRequestBody)
    ], TwipcRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TwipcSecurity)
    ], TwipcRequest.prototype, "security", void 0);
    return TwipcRequest;
}(utils_1.SpeakeasyBase));
exports.TwipcRequest = TwipcRequest;
var TwipcResponse = /** @class */ (function (_super) {
    __extends(TwipcResponse, _super);
    function TwipcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TwipcResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TwipcResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Twipc400ApplicationJson)
    ], TwipcResponse.prototype, "twipc400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Twipc401ApplicationJson)
    ], TwipcResponse.prototype, "twipc401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Twipc404ApplicationJson)
    ], TwipcResponse.prototype, "twipc404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Twipc500ApplicationJson)
    ], TwipcResponse.prototype, "twipc500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Twipc502ApplicationJson)
    ], TwipcResponse.prototype, "twipc502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Twipc503ApplicationJson)
    ], TwipcResponse.prototype, "twipc503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Twipc504ApplicationJson)
    ], TwipcResponse.prototype, "twipc504ApplicationJSONObject", void 0);
    return TwipcResponse;
}(utils_1.SpeakeasyBase));
exports.TwipcResponse = TwipcResponse;
