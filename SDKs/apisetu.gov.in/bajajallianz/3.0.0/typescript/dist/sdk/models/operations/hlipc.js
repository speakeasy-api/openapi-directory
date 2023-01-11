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
exports.HlipcResponse = exports.HlipcRequest = exports.Hlipc504ApplicationJson = exports.Hlipc504ApplicationJsonErrorDescriptionEnum = exports.Hlipc504ApplicationJsonErrorEnum = exports.Hlipc503ApplicationJson = exports.Hlipc503ApplicationJsonErrorDescriptionEnum = exports.Hlipc503ApplicationJsonErrorEnum = exports.Hlipc502ApplicationJson = exports.Hlipc502ApplicationJsonErrorDescriptionEnum = exports.Hlipc502ApplicationJsonErrorEnum = exports.Hlipc500ApplicationJson = exports.Hlipc500ApplicationJsonErrorDescriptionEnum = exports.Hlipc500ApplicationJsonErrorEnum = exports.Hlipc404ApplicationJson = exports.Hlipc404ApplicationJsonErrorDescriptionEnum = exports.Hlipc404ApplicationJsonErrorEnum = exports.Hlipc401ApplicationJson = exports.Hlipc401ApplicationJsonErrorDescriptionEnum = exports.Hlipc401ApplicationJsonErrorEnum = exports.Hlipc400ApplicationJson = exports.Hlipc400ApplicationJsonErrorDescriptionEnum = exports.Hlipc400ApplicationJsonErrorEnum = exports.HlipcSecurity = exports.HlipcRequestBody = exports.HlipcRequestBodyFormatEnum = exports.HlipcRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var HlipcRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(HlipcRequestBodyCertificateParameters, _super);
    function HlipcRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], HlipcRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policy_number" }),
        __metadata("design:type", String)
    ], HlipcRequestBodyCertificateParameters.prototype, "policyNumber", void 0);
    return HlipcRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.HlipcRequestBodyCertificateParameters = HlipcRequestBodyCertificateParameters;
var HlipcRequestBodyFormatEnum;
(function (HlipcRequestBodyFormatEnum) {
    HlipcRequestBodyFormatEnum["Pdf"] = "pdf";
})(HlipcRequestBodyFormatEnum = exports.HlipcRequestBodyFormatEnum || (exports.HlipcRequestBodyFormatEnum = {}));
var HlipcRequestBody = /** @class */ (function (_super) {
    __extends(HlipcRequestBody, _super);
    function HlipcRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", HlipcRequestBodyCertificateParameters)
    ], HlipcRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], HlipcRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], HlipcRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], HlipcRequestBody.prototype, "txnId", void 0);
    return HlipcRequestBody;
}(utils_1.SpeakeasyBase));
exports.HlipcRequestBody = HlipcRequestBody;
var HlipcSecurity = /** @class */ (function (_super) {
    __extends(HlipcSecurity, _super);
    function HlipcSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], HlipcSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], HlipcSecurity.prototype, "clientId", void 0);
    return HlipcSecurity;
}(utils_1.SpeakeasyBase));
exports.HlipcSecurity = HlipcSecurity;
var Hlipc400ApplicationJsonErrorEnum;
(function (Hlipc400ApplicationJsonErrorEnum) {
    Hlipc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Hlipc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Hlipc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Hlipc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Hlipc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Hlipc400ApplicationJsonErrorEnum = exports.Hlipc400ApplicationJsonErrorEnum || (exports.Hlipc400ApplicationJsonErrorEnum = {}));
var Hlipc400ApplicationJsonErrorDescriptionEnum;
(function (Hlipc400ApplicationJsonErrorDescriptionEnum) {
    Hlipc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Hlipc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Hlipc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Hlipc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Hlipc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Hlipc400ApplicationJsonErrorDescriptionEnum = exports.Hlipc400ApplicationJsonErrorDescriptionEnum || (exports.Hlipc400ApplicationJsonErrorDescriptionEnum = {}));
var Hlipc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Hlipc400ApplicationJson, _super);
    function Hlipc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hlipc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hlipc400ApplicationJson.prototype, "errorDescription", void 0);
    return Hlipc400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hlipc400ApplicationJson = Hlipc400ApplicationJson;
var Hlipc401ApplicationJsonErrorEnum;
(function (Hlipc401ApplicationJsonErrorEnum) {
    Hlipc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Hlipc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Hlipc401ApplicationJsonErrorEnum = exports.Hlipc401ApplicationJsonErrorEnum || (exports.Hlipc401ApplicationJsonErrorEnum = {}));
var Hlipc401ApplicationJsonErrorDescriptionEnum;
(function (Hlipc401ApplicationJsonErrorDescriptionEnum) {
    Hlipc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Hlipc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Hlipc401ApplicationJsonErrorDescriptionEnum = exports.Hlipc401ApplicationJsonErrorDescriptionEnum || (exports.Hlipc401ApplicationJsonErrorDescriptionEnum = {}));
var Hlipc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Hlipc401ApplicationJson, _super);
    function Hlipc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hlipc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hlipc401ApplicationJson.prototype, "errorDescription", void 0);
    return Hlipc401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hlipc401ApplicationJson = Hlipc401ApplicationJson;
var Hlipc404ApplicationJsonErrorEnum;
(function (Hlipc404ApplicationJsonErrorEnum) {
    Hlipc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Hlipc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Hlipc404ApplicationJsonErrorEnum = exports.Hlipc404ApplicationJsonErrorEnum || (exports.Hlipc404ApplicationJsonErrorEnum = {}));
var Hlipc404ApplicationJsonErrorDescriptionEnum;
(function (Hlipc404ApplicationJsonErrorDescriptionEnum) {
    Hlipc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Hlipc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Hlipc404ApplicationJsonErrorDescriptionEnum = exports.Hlipc404ApplicationJsonErrorDescriptionEnum || (exports.Hlipc404ApplicationJsonErrorDescriptionEnum = {}));
var Hlipc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Hlipc404ApplicationJson, _super);
    function Hlipc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hlipc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hlipc404ApplicationJson.prototype, "errorDescription", void 0);
    return Hlipc404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hlipc404ApplicationJson = Hlipc404ApplicationJson;
var Hlipc500ApplicationJsonErrorEnum;
(function (Hlipc500ApplicationJsonErrorEnum) {
    Hlipc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Hlipc500ApplicationJsonErrorEnum = exports.Hlipc500ApplicationJsonErrorEnum || (exports.Hlipc500ApplicationJsonErrorEnum = {}));
var Hlipc500ApplicationJsonErrorDescriptionEnum;
(function (Hlipc500ApplicationJsonErrorDescriptionEnum) {
    Hlipc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Hlipc500ApplicationJsonErrorDescriptionEnum = exports.Hlipc500ApplicationJsonErrorDescriptionEnum || (exports.Hlipc500ApplicationJsonErrorDescriptionEnum = {}));
var Hlipc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Hlipc500ApplicationJson, _super);
    function Hlipc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hlipc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hlipc500ApplicationJson.prototype, "errorDescription", void 0);
    return Hlipc500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hlipc500ApplicationJson = Hlipc500ApplicationJson;
var Hlipc502ApplicationJsonErrorEnum;
(function (Hlipc502ApplicationJsonErrorEnum) {
    Hlipc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Hlipc502ApplicationJsonErrorEnum = exports.Hlipc502ApplicationJsonErrorEnum || (exports.Hlipc502ApplicationJsonErrorEnum = {}));
var Hlipc502ApplicationJsonErrorDescriptionEnum;
(function (Hlipc502ApplicationJsonErrorDescriptionEnum) {
    Hlipc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Hlipc502ApplicationJsonErrorDescriptionEnum = exports.Hlipc502ApplicationJsonErrorDescriptionEnum || (exports.Hlipc502ApplicationJsonErrorDescriptionEnum = {}));
var Hlipc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Hlipc502ApplicationJson, _super);
    function Hlipc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hlipc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hlipc502ApplicationJson.prototype, "errorDescription", void 0);
    return Hlipc502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hlipc502ApplicationJson = Hlipc502ApplicationJson;
var Hlipc503ApplicationJsonErrorEnum;
(function (Hlipc503ApplicationJsonErrorEnum) {
    Hlipc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Hlipc503ApplicationJsonErrorEnum = exports.Hlipc503ApplicationJsonErrorEnum || (exports.Hlipc503ApplicationJsonErrorEnum = {}));
var Hlipc503ApplicationJsonErrorDescriptionEnum;
(function (Hlipc503ApplicationJsonErrorDescriptionEnum) {
    Hlipc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Hlipc503ApplicationJsonErrorDescriptionEnum = exports.Hlipc503ApplicationJsonErrorDescriptionEnum || (exports.Hlipc503ApplicationJsonErrorDescriptionEnum = {}));
var Hlipc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Hlipc503ApplicationJson, _super);
    function Hlipc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hlipc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hlipc503ApplicationJson.prototype, "errorDescription", void 0);
    return Hlipc503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hlipc503ApplicationJson = Hlipc503ApplicationJson;
var Hlipc504ApplicationJsonErrorEnum;
(function (Hlipc504ApplicationJsonErrorEnum) {
    Hlipc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Hlipc504ApplicationJsonErrorEnum = exports.Hlipc504ApplicationJsonErrorEnum || (exports.Hlipc504ApplicationJsonErrorEnum = {}));
var Hlipc504ApplicationJsonErrorDescriptionEnum;
(function (Hlipc504ApplicationJsonErrorDescriptionEnum) {
    Hlipc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Hlipc504ApplicationJsonErrorDescriptionEnum = exports.Hlipc504ApplicationJsonErrorDescriptionEnum || (exports.Hlipc504ApplicationJsonErrorDescriptionEnum = {}));
var Hlipc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Hlipc504ApplicationJson, _super);
    function Hlipc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hlipc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hlipc504ApplicationJson.prototype, "errorDescription", void 0);
    return Hlipc504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hlipc504ApplicationJson = Hlipc504ApplicationJson;
var HlipcRequest = /** @class */ (function (_super) {
    __extends(HlipcRequest, _super);
    function HlipcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", HlipcRequestBody)
    ], HlipcRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", HlipcSecurity)
    ], HlipcRequest.prototype, "security", void 0);
    return HlipcRequest;
}(utils_1.SpeakeasyBase));
exports.HlipcRequest = HlipcRequest;
var HlipcResponse = /** @class */ (function (_super) {
    __extends(HlipcResponse, _super);
    function HlipcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], HlipcResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], HlipcResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hlipc400ApplicationJson)
    ], HlipcResponse.prototype, "hlipc400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hlipc401ApplicationJson)
    ], HlipcResponse.prototype, "hlipc401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hlipc404ApplicationJson)
    ], HlipcResponse.prototype, "hlipc404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hlipc500ApplicationJson)
    ], HlipcResponse.prototype, "hlipc500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hlipc502ApplicationJson)
    ], HlipcResponse.prototype, "hlipc502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hlipc503ApplicationJson)
    ], HlipcResponse.prototype, "hlipc503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hlipc504ApplicationJson)
    ], HlipcResponse.prototype, "hlipc504ApplicationJSONObject", void 0);
    return HlipcResponse;
}(utils_1.SpeakeasyBase));
exports.HlipcResponse = HlipcResponse;
