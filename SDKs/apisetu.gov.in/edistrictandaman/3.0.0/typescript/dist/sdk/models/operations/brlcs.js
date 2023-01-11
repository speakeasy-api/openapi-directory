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
exports.BrlcsResponse = exports.BrlcsRequest = exports.Brlcs504ApplicationJson = exports.Brlcs504ApplicationJsonErrorDescriptionEnum = exports.Brlcs504ApplicationJsonErrorEnum = exports.Brlcs503ApplicationJson = exports.Brlcs503ApplicationJsonErrorDescriptionEnum = exports.Brlcs503ApplicationJsonErrorEnum = exports.Brlcs502ApplicationJson = exports.Brlcs502ApplicationJsonErrorDescriptionEnum = exports.Brlcs502ApplicationJsonErrorEnum = exports.Brlcs500ApplicationJson = exports.Brlcs500ApplicationJsonErrorDescriptionEnum = exports.Brlcs500ApplicationJsonErrorEnum = exports.Brlcs404ApplicationJson = exports.Brlcs404ApplicationJsonErrorDescriptionEnum = exports.Brlcs404ApplicationJsonErrorEnum = exports.Brlcs401ApplicationJson = exports.Brlcs401ApplicationJsonErrorDescriptionEnum = exports.Brlcs401ApplicationJsonErrorEnum = exports.Brlcs400ApplicationJson = exports.Brlcs400ApplicationJsonErrorDescriptionEnum = exports.Brlcs400ApplicationJsonErrorEnum = exports.BrlcsSecurity = exports.BrlcsRequestBody = exports.BrlcsRequestBodyFormatEnum = exports.BrlcsRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var BrlcsRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(BrlcsRequestBodyCertificateParameters, _super);
    function BrlcsRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CertificateNumber" }),
        __metadata("design:type", String)
    ], BrlcsRequestBodyCertificateParameters.prototype, "certificateNumber", void 0);
    return BrlcsRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.BrlcsRequestBodyCertificateParameters = BrlcsRequestBodyCertificateParameters;
var BrlcsRequestBodyFormatEnum;
(function (BrlcsRequestBodyFormatEnum) {
    BrlcsRequestBodyFormatEnum["Pdf"] = "pdf";
})(BrlcsRequestBodyFormatEnum = exports.BrlcsRequestBodyFormatEnum || (exports.BrlcsRequestBodyFormatEnum = {}));
var BrlcsRequestBody = /** @class */ (function (_super) {
    __extends(BrlcsRequestBody, _super);
    function BrlcsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", BrlcsRequestBodyCertificateParameters)
    ], BrlcsRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], BrlcsRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], BrlcsRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], BrlcsRequestBody.prototype, "txnId", void 0);
    return BrlcsRequestBody;
}(utils_1.SpeakeasyBase));
exports.BrlcsRequestBody = BrlcsRequestBody;
var BrlcsSecurity = /** @class */ (function (_super) {
    __extends(BrlcsSecurity, _super);
    function BrlcsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], BrlcsSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], BrlcsSecurity.prototype, "clientId", void 0);
    return BrlcsSecurity;
}(utils_1.SpeakeasyBase));
exports.BrlcsSecurity = BrlcsSecurity;
var Brlcs400ApplicationJsonErrorEnum;
(function (Brlcs400ApplicationJsonErrorEnum) {
    Brlcs400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Brlcs400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Brlcs400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Brlcs400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Brlcs400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Brlcs400ApplicationJsonErrorEnum = exports.Brlcs400ApplicationJsonErrorEnum || (exports.Brlcs400ApplicationJsonErrorEnum = {}));
var Brlcs400ApplicationJsonErrorDescriptionEnum;
(function (Brlcs400ApplicationJsonErrorDescriptionEnum) {
    Brlcs400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Brlcs400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Brlcs400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Brlcs400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Brlcs400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Brlcs400ApplicationJsonErrorDescriptionEnum = exports.Brlcs400ApplicationJsonErrorDescriptionEnum || (exports.Brlcs400ApplicationJsonErrorDescriptionEnum = {}));
var Brlcs400ApplicationJson = /** @class */ (function (_super) {
    __extends(Brlcs400ApplicationJson, _super);
    function Brlcs400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Brlcs400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Brlcs400ApplicationJson.prototype, "errorDescription", void 0);
    return Brlcs400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Brlcs400ApplicationJson = Brlcs400ApplicationJson;
var Brlcs401ApplicationJsonErrorEnum;
(function (Brlcs401ApplicationJsonErrorEnum) {
    Brlcs401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Brlcs401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Brlcs401ApplicationJsonErrorEnum = exports.Brlcs401ApplicationJsonErrorEnum || (exports.Brlcs401ApplicationJsonErrorEnum = {}));
var Brlcs401ApplicationJsonErrorDescriptionEnum;
(function (Brlcs401ApplicationJsonErrorDescriptionEnum) {
    Brlcs401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Brlcs401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Brlcs401ApplicationJsonErrorDescriptionEnum = exports.Brlcs401ApplicationJsonErrorDescriptionEnum || (exports.Brlcs401ApplicationJsonErrorDescriptionEnum = {}));
var Brlcs401ApplicationJson = /** @class */ (function (_super) {
    __extends(Brlcs401ApplicationJson, _super);
    function Brlcs401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Brlcs401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Brlcs401ApplicationJson.prototype, "errorDescription", void 0);
    return Brlcs401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Brlcs401ApplicationJson = Brlcs401ApplicationJson;
var Brlcs404ApplicationJsonErrorEnum;
(function (Brlcs404ApplicationJsonErrorEnum) {
    Brlcs404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Brlcs404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Brlcs404ApplicationJsonErrorEnum = exports.Brlcs404ApplicationJsonErrorEnum || (exports.Brlcs404ApplicationJsonErrorEnum = {}));
var Brlcs404ApplicationJsonErrorDescriptionEnum;
(function (Brlcs404ApplicationJsonErrorDescriptionEnum) {
    Brlcs404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Brlcs404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Brlcs404ApplicationJsonErrorDescriptionEnum = exports.Brlcs404ApplicationJsonErrorDescriptionEnum || (exports.Brlcs404ApplicationJsonErrorDescriptionEnum = {}));
var Brlcs404ApplicationJson = /** @class */ (function (_super) {
    __extends(Brlcs404ApplicationJson, _super);
    function Brlcs404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Brlcs404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Brlcs404ApplicationJson.prototype, "errorDescription", void 0);
    return Brlcs404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Brlcs404ApplicationJson = Brlcs404ApplicationJson;
var Brlcs500ApplicationJsonErrorEnum;
(function (Brlcs500ApplicationJsonErrorEnum) {
    Brlcs500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Brlcs500ApplicationJsonErrorEnum = exports.Brlcs500ApplicationJsonErrorEnum || (exports.Brlcs500ApplicationJsonErrorEnum = {}));
var Brlcs500ApplicationJsonErrorDescriptionEnum;
(function (Brlcs500ApplicationJsonErrorDescriptionEnum) {
    Brlcs500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Brlcs500ApplicationJsonErrorDescriptionEnum = exports.Brlcs500ApplicationJsonErrorDescriptionEnum || (exports.Brlcs500ApplicationJsonErrorDescriptionEnum = {}));
var Brlcs500ApplicationJson = /** @class */ (function (_super) {
    __extends(Brlcs500ApplicationJson, _super);
    function Brlcs500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Brlcs500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Brlcs500ApplicationJson.prototype, "errorDescription", void 0);
    return Brlcs500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Brlcs500ApplicationJson = Brlcs500ApplicationJson;
var Brlcs502ApplicationJsonErrorEnum;
(function (Brlcs502ApplicationJsonErrorEnum) {
    Brlcs502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Brlcs502ApplicationJsonErrorEnum = exports.Brlcs502ApplicationJsonErrorEnum || (exports.Brlcs502ApplicationJsonErrorEnum = {}));
var Brlcs502ApplicationJsonErrorDescriptionEnum;
(function (Brlcs502ApplicationJsonErrorDescriptionEnum) {
    Brlcs502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Brlcs502ApplicationJsonErrorDescriptionEnum = exports.Brlcs502ApplicationJsonErrorDescriptionEnum || (exports.Brlcs502ApplicationJsonErrorDescriptionEnum = {}));
var Brlcs502ApplicationJson = /** @class */ (function (_super) {
    __extends(Brlcs502ApplicationJson, _super);
    function Brlcs502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Brlcs502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Brlcs502ApplicationJson.prototype, "errorDescription", void 0);
    return Brlcs502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Brlcs502ApplicationJson = Brlcs502ApplicationJson;
var Brlcs503ApplicationJsonErrorEnum;
(function (Brlcs503ApplicationJsonErrorEnum) {
    Brlcs503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Brlcs503ApplicationJsonErrorEnum = exports.Brlcs503ApplicationJsonErrorEnum || (exports.Brlcs503ApplicationJsonErrorEnum = {}));
var Brlcs503ApplicationJsonErrorDescriptionEnum;
(function (Brlcs503ApplicationJsonErrorDescriptionEnum) {
    Brlcs503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Brlcs503ApplicationJsonErrorDescriptionEnum = exports.Brlcs503ApplicationJsonErrorDescriptionEnum || (exports.Brlcs503ApplicationJsonErrorDescriptionEnum = {}));
var Brlcs503ApplicationJson = /** @class */ (function (_super) {
    __extends(Brlcs503ApplicationJson, _super);
    function Brlcs503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Brlcs503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Brlcs503ApplicationJson.prototype, "errorDescription", void 0);
    return Brlcs503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Brlcs503ApplicationJson = Brlcs503ApplicationJson;
var Brlcs504ApplicationJsonErrorEnum;
(function (Brlcs504ApplicationJsonErrorEnum) {
    Brlcs504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Brlcs504ApplicationJsonErrorEnum = exports.Brlcs504ApplicationJsonErrorEnum || (exports.Brlcs504ApplicationJsonErrorEnum = {}));
var Brlcs504ApplicationJsonErrorDescriptionEnum;
(function (Brlcs504ApplicationJsonErrorDescriptionEnum) {
    Brlcs504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Brlcs504ApplicationJsonErrorDescriptionEnum = exports.Brlcs504ApplicationJsonErrorDescriptionEnum || (exports.Brlcs504ApplicationJsonErrorDescriptionEnum = {}));
var Brlcs504ApplicationJson = /** @class */ (function (_super) {
    __extends(Brlcs504ApplicationJson, _super);
    function Brlcs504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Brlcs504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Brlcs504ApplicationJson.prototype, "errorDescription", void 0);
    return Brlcs504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Brlcs504ApplicationJson = Brlcs504ApplicationJson;
var BrlcsRequest = /** @class */ (function (_super) {
    __extends(BrlcsRequest, _super);
    function BrlcsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", BrlcsRequestBody)
    ], BrlcsRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", BrlcsSecurity)
    ], BrlcsRequest.prototype, "security", void 0);
    return BrlcsRequest;
}(utils_1.SpeakeasyBase));
exports.BrlcsRequest = BrlcsRequest;
var BrlcsResponse = /** @class */ (function (_super) {
    __extends(BrlcsResponse, _super);
    function BrlcsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], BrlcsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], BrlcsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Brlcs400ApplicationJson)
    ], BrlcsResponse.prototype, "brlcs400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Brlcs401ApplicationJson)
    ], BrlcsResponse.prototype, "brlcs401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Brlcs404ApplicationJson)
    ], BrlcsResponse.prototype, "brlcs404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Brlcs500ApplicationJson)
    ], BrlcsResponse.prototype, "brlcs500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Brlcs502ApplicationJson)
    ], BrlcsResponse.prototype, "brlcs502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Brlcs503ApplicationJson)
    ], BrlcsResponse.prototype, "brlcs503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Brlcs504ApplicationJson)
    ], BrlcsResponse.prototype, "brlcs504ApplicationJSONObject", void 0);
    return BrlcsResponse;
}(utils_1.SpeakeasyBase));
exports.BrlcsResponse = BrlcsResponse;
