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
exports.EgipcResponse = exports.EgipcRequest = exports.Egipc504ApplicationJson = exports.Egipc504ApplicationJsonErrorDescriptionEnum = exports.Egipc504ApplicationJsonErrorEnum = exports.Egipc503ApplicationJson = exports.Egipc503ApplicationJsonErrorDescriptionEnum = exports.Egipc503ApplicationJsonErrorEnum = exports.Egipc502ApplicationJson = exports.Egipc502ApplicationJsonErrorDescriptionEnum = exports.Egipc502ApplicationJsonErrorEnum = exports.Egipc500ApplicationJson = exports.Egipc500ApplicationJsonErrorDescriptionEnum = exports.Egipc500ApplicationJsonErrorEnum = exports.Egipc404ApplicationJson = exports.Egipc404ApplicationJsonErrorDescriptionEnum = exports.Egipc404ApplicationJsonErrorEnum = exports.Egipc401ApplicationJson = exports.Egipc401ApplicationJsonErrorDescriptionEnum = exports.Egipc401ApplicationJsonErrorEnum = exports.Egipc400ApplicationJson = exports.Egipc400ApplicationJsonErrorDescriptionEnum = exports.Egipc400ApplicationJsonErrorEnum = exports.EgipcSecurity = exports.EgipcRequestBody = exports.EgipcRequestBodyFormatEnum = exports.EgipcRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EgipcRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(EgipcRequestBodyCertificateParameters, _super);
    function EgipcRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=INSCODE" }),
        __metadata("design:type", String)
    ], EgipcRequestBodyCertificateParameters.prototype, "inscode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=POLNO" }),
        __metadata("design:type", String)
    ], EgipcRequestBodyCertificateParameters.prototype, "polno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=STARTDT" }),
        __metadata("design:type", String)
    ], EgipcRequestBodyCertificateParameters.prototype, "startdt", void 0);
    return EgipcRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.EgipcRequestBodyCertificateParameters = EgipcRequestBodyCertificateParameters;
var EgipcRequestBodyFormatEnum;
(function (EgipcRequestBodyFormatEnum) {
    EgipcRequestBodyFormatEnum["Pdf"] = "pdf";
})(EgipcRequestBodyFormatEnum = exports.EgipcRequestBodyFormatEnum || (exports.EgipcRequestBodyFormatEnum = {}));
var EgipcRequestBody = /** @class */ (function (_super) {
    __extends(EgipcRequestBody, _super);
    function EgipcRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", EgipcRequestBodyCertificateParameters)
    ], EgipcRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], EgipcRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], EgipcRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], EgipcRequestBody.prototype, "txnId", void 0);
    return EgipcRequestBody;
}(utils_1.SpeakeasyBase));
exports.EgipcRequestBody = EgipcRequestBody;
var EgipcSecurity = /** @class */ (function (_super) {
    __extends(EgipcSecurity, _super);
    function EgipcSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], EgipcSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], EgipcSecurity.prototype, "clientId", void 0);
    return EgipcSecurity;
}(utils_1.SpeakeasyBase));
exports.EgipcSecurity = EgipcSecurity;
var Egipc400ApplicationJsonErrorEnum;
(function (Egipc400ApplicationJsonErrorEnum) {
    Egipc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Egipc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Egipc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Egipc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Egipc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Egipc400ApplicationJsonErrorEnum = exports.Egipc400ApplicationJsonErrorEnum || (exports.Egipc400ApplicationJsonErrorEnum = {}));
var Egipc400ApplicationJsonErrorDescriptionEnum;
(function (Egipc400ApplicationJsonErrorDescriptionEnum) {
    Egipc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Egipc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Egipc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Egipc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Egipc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Egipc400ApplicationJsonErrorDescriptionEnum = exports.Egipc400ApplicationJsonErrorDescriptionEnum || (exports.Egipc400ApplicationJsonErrorDescriptionEnum = {}));
var Egipc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Egipc400ApplicationJson, _super);
    function Egipc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Egipc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Egipc400ApplicationJson.prototype, "errorDescription", void 0);
    return Egipc400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Egipc400ApplicationJson = Egipc400ApplicationJson;
var Egipc401ApplicationJsonErrorEnum;
(function (Egipc401ApplicationJsonErrorEnum) {
    Egipc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Egipc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Egipc401ApplicationJsonErrorEnum = exports.Egipc401ApplicationJsonErrorEnum || (exports.Egipc401ApplicationJsonErrorEnum = {}));
var Egipc401ApplicationJsonErrorDescriptionEnum;
(function (Egipc401ApplicationJsonErrorDescriptionEnum) {
    Egipc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Egipc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Egipc401ApplicationJsonErrorDescriptionEnum = exports.Egipc401ApplicationJsonErrorDescriptionEnum || (exports.Egipc401ApplicationJsonErrorDescriptionEnum = {}));
var Egipc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Egipc401ApplicationJson, _super);
    function Egipc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Egipc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Egipc401ApplicationJson.prototype, "errorDescription", void 0);
    return Egipc401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Egipc401ApplicationJson = Egipc401ApplicationJson;
var Egipc404ApplicationJsonErrorEnum;
(function (Egipc404ApplicationJsonErrorEnum) {
    Egipc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Egipc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Egipc404ApplicationJsonErrorEnum = exports.Egipc404ApplicationJsonErrorEnum || (exports.Egipc404ApplicationJsonErrorEnum = {}));
var Egipc404ApplicationJsonErrorDescriptionEnum;
(function (Egipc404ApplicationJsonErrorDescriptionEnum) {
    Egipc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Egipc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Egipc404ApplicationJsonErrorDescriptionEnum = exports.Egipc404ApplicationJsonErrorDescriptionEnum || (exports.Egipc404ApplicationJsonErrorDescriptionEnum = {}));
var Egipc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Egipc404ApplicationJson, _super);
    function Egipc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Egipc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Egipc404ApplicationJson.prototype, "errorDescription", void 0);
    return Egipc404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Egipc404ApplicationJson = Egipc404ApplicationJson;
var Egipc500ApplicationJsonErrorEnum;
(function (Egipc500ApplicationJsonErrorEnum) {
    Egipc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Egipc500ApplicationJsonErrorEnum = exports.Egipc500ApplicationJsonErrorEnum || (exports.Egipc500ApplicationJsonErrorEnum = {}));
var Egipc500ApplicationJsonErrorDescriptionEnum;
(function (Egipc500ApplicationJsonErrorDescriptionEnum) {
    Egipc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Egipc500ApplicationJsonErrorDescriptionEnum = exports.Egipc500ApplicationJsonErrorDescriptionEnum || (exports.Egipc500ApplicationJsonErrorDescriptionEnum = {}));
var Egipc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Egipc500ApplicationJson, _super);
    function Egipc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Egipc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Egipc500ApplicationJson.prototype, "errorDescription", void 0);
    return Egipc500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Egipc500ApplicationJson = Egipc500ApplicationJson;
var Egipc502ApplicationJsonErrorEnum;
(function (Egipc502ApplicationJsonErrorEnum) {
    Egipc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Egipc502ApplicationJsonErrorEnum = exports.Egipc502ApplicationJsonErrorEnum || (exports.Egipc502ApplicationJsonErrorEnum = {}));
var Egipc502ApplicationJsonErrorDescriptionEnum;
(function (Egipc502ApplicationJsonErrorDescriptionEnum) {
    Egipc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Egipc502ApplicationJsonErrorDescriptionEnum = exports.Egipc502ApplicationJsonErrorDescriptionEnum || (exports.Egipc502ApplicationJsonErrorDescriptionEnum = {}));
var Egipc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Egipc502ApplicationJson, _super);
    function Egipc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Egipc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Egipc502ApplicationJson.prototype, "errorDescription", void 0);
    return Egipc502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Egipc502ApplicationJson = Egipc502ApplicationJson;
var Egipc503ApplicationJsonErrorEnum;
(function (Egipc503ApplicationJsonErrorEnum) {
    Egipc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Egipc503ApplicationJsonErrorEnum = exports.Egipc503ApplicationJsonErrorEnum || (exports.Egipc503ApplicationJsonErrorEnum = {}));
var Egipc503ApplicationJsonErrorDescriptionEnum;
(function (Egipc503ApplicationJsonErrorDescriptionEnum) {
    Egipc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Egipc503ApplicationJsonErrorDescriptionEnum = exports.Egipc503ApplicationJsonErrorDescriptionEnum || (exports.Egipc503ApplicationJsonErrorDescriptionEnum = {}));
var Egipc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Egipc503ApplicationJson, _super);
    function Egipc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Egipc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Egipc503ApplicationJson.prototype, "errorDescription", void 0);
    return Egipc503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Egipc503ApplicationJson = Egipc503ApplicationJson;
var Egipc504ApplicationJsonErrorEnum;
(function (Egipc504ApplicationJsonErrorEnum) {
    Egipc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Egipc504ApplicationJsonErrorEnum = exports.Egipc504ApplicationJsonErrorEnum || (exports.Egipc504ApplicationJsonErrorEnum = {}));
var Egipc504ApplicationJsonErrorDescriptionEnum;
(function (Egipc504ApplicationJsonErrorDescriptionEnum) {
    Egipc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Egipc504ApplicationJsonErrorDescriptionEnum = exports.Egipc504ApplicationJsonErrorDescriptionEnum || (exports.Egipc504ApplicationJsonErrorDescriptionEnum = {}));
var Egipc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Egipc504ApplicationJson, _super);
    function Egipc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Egipc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Egipc504ApplicationJson.prototype, "errorDescription", void 0);
    return Egipc504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Egipc504ApplicationJson = Egipc504ApplicationJson;
var EgipcRequest = /** @class */ (function (_super) {
    __extends(EgipcRequest, _super);
    function EgipcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", EgipcRequestBody)
    ], EgipcRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EgipcSecurity)
    ], EgipcRequest.prototype, "security", void 0);
    return EgipcRequest;
}(utils_1.SpeakeasyBase));
exports.EgipcRequest = EgipcRequest;
var EgipcResponse = /** @class */ (function (_super) {
    __extends(EgipcResponse, _super);
    function EgipcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EgipcResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EgipcResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Egipc400ApplicationJson)
    ], EgipcResponse.prototype, "egipc400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Egipc401ApplicationJson)
    ], EgipcResponse.prototype, "egipc401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Egipc404ApplicationJson)
    ], EgipcResponse.prototype, "egipc404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Egipc500ApplicationJson)
    ], EgipcResponse.prototype, "egipc500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Egipc502ApplicationJson)
    ], EgipcResponse.prototype, "egipc502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Egipc503ApplicationJson)
    ], EgipcResponse.prototype, "egipc503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Egipc504ApplicationJson)
    ], EgipcResponse.prototype, "egipc504ApplicationJSONObject", void 0);
    return EgipcResponse;
}(utils_1.SpeakeasyBase));
exports.EgipcResponse = EgipcResponse;
