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
exports.AlsfcResponse = exports.AlsfcRequest = exports.Alsfc504ApplicationJson = exports.Alsfc504ApplicationJsonErrorDescriptionEnum = exports.Alsfc504ApplicationJsonErrorEnum = exports.Alsfc503ApplicationJson = exports.Alsfc503ApplicationJsonErrorDescriptionEnum = exports.Alsfc503ApplicationJsonErrorEnum = exports.Alsfc502ApplicationJson = exports.Alsfc502ApplicationJsonErrorDescriptionEnum = exports.Alsfc502ApplicationJsonErrorEnum = exports.Alsfc500ApplicationJson = exports.Alsfc500ApplicationJsonErrorDescriptionEnum = exports.Alsfc500ApplicationJsonErrorEnum = exports.Alsfc404ApplicationJson = exports.Alsfc404ApplicationJsonErrorDescriptionEnum = exports.Alsfc404ApplicationJsonErrorEnum = exports.Alsfc401ApplicationJson = exports.Alsfc401ApplicationJsonErrorDescriptionEnum = exports.Alsfc401ApplicationJsonErrorEnum = exports.Alsfc400ApplicationJson = exports.Alsfc400ApplicationJsonErrorDescriptionEnum = exports.Alsfc400ApplicationJsonErrorEnum = exports.AlsfcSecurity = exports.AlsfcRequestBody = exports.AlsfcRequestBodyFormatEnum = exports.AlsfcRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AlsfcRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(AlsfcRequestBodyCertificateParameters, _super);
    function AlsfcRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], AlsfcRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], AlsfcRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return AlsfcRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.AlsfcRequestBodyCertificateParameters = AlsfcRequestBodyCertificateParameters;
var AlsfcRequestBodyFormatEnum;
(function (AlsfcRequestBodyFormatEnum) {
    AlsfcRequestBodyFormatEnum["Pdf"] = "pdf";
})(AlsfcRequestBodyFormatEnum = exports.AlsfcRequestBodyFormatEnum || (exports.AlsfcRequestBodyFormatEnum = {}));
var AlsfcRequestBody = /** @class */ (function (_super) {
    __extends(AlsfcRequestBody, _super);
    function AlsfcRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", AlsfcRequestBodyCertificateParameters)
    ], AlsfcRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], AlsfcRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], AlsfcRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], AlsfcRequestBody.prototype, "txnId", void 0);
    return AlsfcRequestBody;
}(utils_1.SpeakeasyBase));
exports.AlsfcRequestBody = AlsfcRequestBody;
var AlsfcSecurity = /** @class */ (function (_super) {
    __extends(AlsfcSecurity, _super);
    function AlsfcSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], AlsfcSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], AlsfcSecurity.prototype, "clientId", void 0);
    return AlsfcSecurity;
}(utils_1.SpeakeasyBase));
exports.AlsfcSecurity = AlsfcSecurity;
var Alsfc400ApplicationJsonErrorEnum;
(function (Alsfc400ApplicationJsonErrorEnum) {
    Alsfc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Alsfc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Alsfc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Alsfc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Alsfc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Alsfc400ApplicationJsonErrorEnum = exports.Alsfc400ApplicationJsonErrorEnum || (exports.Alsfc400ApplicationJsonErrorEnum = {}));
var Alsfc400ApplicationJsonErrorDescriptionEnum;
(function (Alsfc400ApplicationJsonErrorDescriptionEnum) {
    Alsfc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Alsfc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Alsfc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Alsfc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Alsfc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Alsfc400ApplicationJsonErrorDescriptionEnum = exports.Alsfc400ApplicationJsonErrorDescriptionEnum || (exports.Alsfc400ApplicationJsonErrorDescriptionEnum = {}));
var Alsfc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Alsfc400ApplicationJson, _super);
    function Alsfc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alsfc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alsfc400ApplicationJson.prototype, "errorDescription", void 0);
    return Alsfc400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Alsfc400ApplicationJson = Alsfc400ApplicationJson;
var Alsfc401ApplicationJsonErrorEnum;
(function (Alsfc401ApplicationJsonErrorEnum) {
    Alsfc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Alsfc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Alsfc401ApplicationJsonErrorEnum = exports.Alsfc401ApplicationJsonErrorEnum || (exports.Alsfc401ApplicationJsonErrorEnum = {}));
var Alsfc401ApplicationJsonErrorDescriptionEnum;
(function (Alsfc401ApplicationJsonErrorDescriptionEnum) {
    Alsfc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Alsfc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Alsfc401ApplicationJsonErrorDescriptionEnum = exports.Alsfc401ApplicationJsonErrorDescriptionEnum || (exports.Alsfc401ApplicationJsonErrorDescriptionEnum = {}));
var Alsfc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Alsfc401ApplicationJson, _super);
    function Alsfc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alsfc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alsfc401ApplicationJson.prototype, "errorDescription", void 0);
    return Alsfc401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Alsfc401ApplicationJson = Alsfc401ApplicationJson;
var Alsfc404ApplicationJsonErrorEnum;
(function (Alsfc404ApplicationJsonErrorEnum) {
    Alsfc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Alsfc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Alsfc404ApplicationJsonErrorEnum = exports.Alsfc404ApplicationJsonErrorEnum || (exports.Alsfc404ApplicationJsonErrorEnum = {}));
var Alsfc404ApplicationJsonErrorDescriptionEnum;
(function (Alsfc404ApplicationJsonErrorDescriptionEnum) {
    Alsfc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Alsfc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Alsfc404ApplicationJsonErrorDescriptionEnum = exports.Alsfc404ApplicationJsonErrorDescriptionEnum || (exports.Alsfc404ApplicationJsonErrorDescriptionEnum = {}));
var Alsfc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Alsfc404ApplicationJson, _super);
    function Alsfc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alsfc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alsfc404ApplicationJson.prototype, "errorDescription", void 0);
    return Alsfc404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Alsfc404ApplicationJson = Alsfc404ApplicationJson;
var Alsfc500ApplicationJsonErrorEnum;
(function (Alsfc500ApplicationJsonErrorEnum) {
    Alsfc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Alsfc500ApplicationJsonErrorEnum = exports.Alsfc500ApplicationJsonErrorEnum || (exports.Alsfc500ApplicationJsonErrorEnum = {}));
var Alsfc500ApplicationJsonErrorDescriptionEnum;
(function (Alsfc500ApplicationJsonErrorDescriptionEnum) {
    Alsfc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Alsfc500ApplicationJsonErrorDescriptionEnum = exports.Alsfc500ApplicationJsonErrorDescriptionEnum || (exports.Alsfc500ApplicationJsonErrorDescriptionEnum = {}));
var Alsfc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Alsfc500ApplicationJson, _super);
    function Alsfc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alsfc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alsfc500ApplicationJson.prototype, "errorDescription", void 0);
    return Alsfc500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Alsfc500ApplicationJson = Alsfc500ApplicationJson;
var Alsfc502ApplicationJsonErrorEnum;
(function (Alsfc502ApplicationJsonErrorEnum) {
    Alsfc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Alsfc502ApplicationJsonErrorEnum = exports.Alsfc502ApplicationJsonErrorEnum || (exports.Alsfc502ApplicationJsonErrorEnum = {}));
var Alsfc502ApplicationJsonErrorDescriptionEnum;
(function (Alsfc502ApplicationJsonErrorDescriptionEnum) {
    Alsfc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Alsfc502ApplicationJsonErrorDescriptionEnum = exports.Alsfc502ApplicationJsonErrorDescriptionEnum || (exports.Alsfc502ApplicationJsonErrorDescriptionEnum = {}));
var Alsfc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Alsfc502ApplicationJson, _super);
    function Alsfc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alsfc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alsfc502ApplicationJson.prototype, "errorDescription", void 0);
    return Alsfc502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Alsfc502ApplicationJson = Alsfc502ApplicationJson;
var Alsfc503ApplicationJsonErrorEnum;
(function (Alsfc503ApplicationJsonErrorEnum) {
    Alsfc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Alsfc503ApplicationJsonErrorEnum = exports.Alsfc503ApplicationJsonErrorEnum || (exports.Alsfc503ApplicationJsonErrorEnum = {}));
var Alsfc503ApplicationJsonErrorDescriptionEnum;
(function (Alsfc503ApplicationJsonErrorDescriptionEnum) {
    Alsfc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Alsfc503ApplicationJsonErrorDescriptionEnum = exports.Alsfc503ApplicationJsonErrorDescriptionEnum || (exports.Alsfc503ApplicationJsonErrorDescriptionEnum = {}));
var Alsfc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Alsfc503ApplicationJson, _super);
    function Alsfc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alsfc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alsfc503ApplicationJson.prototype, "errorDescription", void 0);
    return Alsfc503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Alsfc503ApplicationJson = Alsfc503ApplicationJson;
var Alsfc504ApplicationJsonErrorEnum;
(function (Alsfc504ApplicationJsonErrorEnum) {
    Alsfc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Alsfc504ApplicationJsonErrorEnum = exports.Alsfc504ApplicationJsonErrorEnum || (exports.Alsfc504ApplicationJsonErrorEnum = {}));
var Alsfc504ApplicationJsonErrorDescriptionEnum;
(function (Alsfc504ApplicationJsonErrorDescriptionEnum) {
    Alsfc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Alsfc504ApplicationJsonErrorDescriptionEnum = exports.Alsfc504ApplicationJsonErrorDescriptionEnum || (exports.Alsfc504ApplicationJsonErrorDescriptionEnum = {}));
var Alsfc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Alsfc504ApplicationJson, _super);
    function Alsfc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Alsfc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Alsfc504ApplicationJson.prototype, "errorDescription", void 0);
    return Alsfc504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Alsfc504ApplicationJson = Alsfc504ApplicationJson;
var AlsfcRequest = /** @class */ (function (_super) {
    __extends(AlsfcRequest, _super);
    function AlsfcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AlsfcRequestBody)
    ], AlsfcRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AlsfcSecurity)
    ], AlsfcRequest.prototype, "security", void 0);
    return AlsfcRequest;
}(utils_1.SpeakeasyBase));
exports.AlsfcRequest = AlsfcRequest;
var AlsfcResponse = /** @class */ (function (_super) {
    __extends(AlsfcResponse, _super);
    function AlsfcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AlsfcResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AlsfcResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Alsfc400ApplicationJson)
    ], AlsfcResponse.prototype, "alsfc400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Alsfc401ApplicationJson)
    ], AlsfcResponse.prototype, "alsfc401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Alsfc404ApplicationJson)
    ], AlsfcResponse.prototype, "alsfc404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Alsfc500ApplicationJson)
    ], AlsfcResponse.prototype, "alsfc500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Alsfc502ApplicationJson)
    ], AlsfcResponse.prototype, "alsfc502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Alsfc503ApplicationJson)
    ], AlsfcResponse.prototype, "alsfc503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Alsfc504ApplicationJson)
    ], AlsfcResponse.prototype, "alsfc504ApplicationJSONObject", void 0);
    return AlsfcResponse;
}(utils_1.SpeakeasyBase));
exports.AlsfcResponse = AlsfcResponse;
