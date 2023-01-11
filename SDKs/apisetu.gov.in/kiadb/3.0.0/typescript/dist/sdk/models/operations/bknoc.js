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
exports.BknocResponse = exports.BknocRequest = exports.Bknoc504ApplicationJson = exports.Bknoc504ApplicationJsonErrorDescriptionEnum = exports.Bknoc504ApplicationJsonErrorEnum = exports.Bknoc503ApplicationJson = exports.Bknoc503ApplicationJsonErrorDescriptionEnum = exports.Bknoc503ApplicationJsonErrorEnum = exports.Bknoc502ApplicationJson = exports.Bknoc502ApplicationJsonErrorDescriptionEnum = exports.Bknoc502ApplicationJsonErrorEnum = exports.Bknoc500ApplicationJson = exports.Bknoc500ApplicationJsonErrorDescriptionEnum = exports.Bknoc500ApplicationJsonErrorEnum = exports.Bknoc404ApplicationJson = exports.Bknoc404ApplicationJsonErrorDescriptionEnum = exports.Bknoc404ApplicationJsonErrorEnum = exports.Bknoc401ApplicationJson = exports.Bknoc401ApplicationJsonErrorDescriptionEnum = exports.Bknoc401ApplicationJsonErrorEnum = exports.Bknoc400ApplicationJson = exports.Bknoc400ApplicationJsonErrorDescriptionEnum = exports.Bknoc400ApplicationJsonErrorEnum = exports.BknocSecurity = exports.BknocRequestBody = exports.BknocRequestBodyFormatEnum = exports.BknocRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var BknocRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(BknocRequestBodyCertificateParameters, _super);
    function BknocRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], BknocRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], BknocRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RegNum" }),
        __metadata("design:type", String)
    ], BknocRequestBodyCertificateParameters.prototype, "regNum", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], BknocRequestBodyCertificateParameters.prototype, "uid", void 0);
    return BknocRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.BknocRequestBodyCertificateParameters = BknocRequestBodyCertificateParameters;
var BknocRequestBodyFormatEnum;
(function (BknocRequestBodyFormatEnum) {
    BknocRequestBodyFormatEnum["Pdf"] = "pdf";
})(BknocRequestBodyFormatEnum = exports.BknocRequestBodyFormatEnum || (exports.BknocRequestBodyFormatEnum = {}));
var BknocRequestBody = /** @class */ (function (_super) {
    __extends(BknocRequestBody, _super);
    function BknocRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", BknocRequestBodyCertificateParameters)
    ], BknocRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], BknocRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], BknocRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], BknocRequestBody.prototype, "txnId", void 0);
    return BknocRequestBody;
}(utils_1.SpeakeasyBase));
exports.BknocRequestBody = BknocRequestBody;
var BknocSecurity = /** @class */ (function (_super) {
    __extends(BknocSecurity, _super);
    function BknocSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], BknocSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], BknocSecurity.prototype, "clientId", void 0);
    return BknocSecurity;
}(utils_1.SpeakeasyBase));
exports.BknocSecurity = BknocSecurity;
var Bknoc400ApplicationJsonErrorEnum;
(function (Bknoc400ApplicationJsonErrorEnum) {
    Bknoc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Bknoc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Bknoc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Bknoc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Bknoc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Bknoc400ApplicationJsonErrorEnum = exports.Bknoc400ApplicationJsonErrorEnum || (exports.Bknoc400ApplicationJsonErrorEnum = {}));
var Bknoc400ApplicationJsonErrorDescriptionEnum;
(function (Bknoc400ApplicationJsonErrorDescriptionEnum) {
    Bknoc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Bknoc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Bknoc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Bknoc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Bknoc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Bknoc400ApplicationJsonErrorDescriptionEnum = exports.Bknoc400ApplicationJsonErrorDescriptionEnum || (exports.Bknoc400ApplicationJsonErrorDescriptionEnum = {}));
var Bknoc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Bknoc400ApplicationJson, _super);
    function Bknoc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bknoc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bknoc400ApplicationJson.prototype, "errorDescription", void 0);
    return Bknoc400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Bknoc400ApplicationJson = Bknoc400ApplicationJson;
var Bknoc401ApplicationJsonErrorEnum;
(function (Bknoc401ApplicationJsonErrorEnum) {
    Bknoc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Bknoc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Bknoc401ApplicationJsonErrorEnum = exports.Bknoc401ApplicationJsonErrorEnum || (exports.Bknoc401ApplicationJsonErrorEnum = {}));
var Bknoc401ApplicationJsonErrorDescriptionEnum;
(function (Bknoc401ApplicationJsonErrorDescriptionEnum) {
    Bknoc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Bknoc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Bknoc401ApplicationJsonErrorDescriptionEnum = exports.Bknoc401ApplicationJsonErrorDescriptionEnum || (exports.Bknoc401ApplicationJsonErrorDescriptionEnum = {}));
var Bknoc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Bknoc401ApplicationJson, _super);
    function Bknoc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bknoc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bknoc401ApplicationJson.prototype, "errorDescription", void 0);
    return Bknoc401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Bknoc401ApplicationJson = Bknoc401ApplicationJson;
var Bknoc404ApplicationJsonErrorEnum;
(function (Bknoc404ApplicationJsonErrorEnum) {
    Bknoc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Bknoc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Bknoc404ApplicationJsonErrorEnum = exports.Bknoc404ApplicationJsonErrorEnum || (exports.Bknoc404ApplicationJsonErrorEnum = {}));
var Bknoc404ApplicationJsonErrorDescriptionEnum;
(function (Bknoc404ApplicationJsonErrorDescriptionEnum) {
    Bknoc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Bknoc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Bknoc404ApplicationJsonErrorDescriptionEnum = exports.Bknoc404ApplicationJsonErrorDescriptionEnum || (exports.Bknoc404ApplicationJsonErrorDescriptionEnum = {}));
var Bknoc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Bknoc404ApplicationJson, _super);
    function Bknoc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bknoc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bknoc404ApplicationJson.prototype, "errorDescription", void 0);
    return Bknoc404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Bknoc404ApplicationJson = Bknoc404ApplicationJson;
var Bknoc500ApplicationJsonErrorEnum;
(function (Bknoc500ApplicationJsonErrorEnum) {
    Bknoc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Bknoc500ApplicationJsonErrorEnum = exports.Bknoc500ApplicationJsonErrorEnum || (exports.Bknoc500ApplicationJsonErrorEnum = {}));
var Bknoc500ApplicationJsonErrorDescriptionEnum;
(function (Bknoc500ApplicationJsonErrorDescriptionEnum) {
    Bknoc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Bknoc500ApplicationJsonErrorDescriptionEnum = exports.Bknoc500ApplicationJsonErrorDescriptionEnum || (exports.Bknoc500ApplicationJsonErrorDescriptionEnum = {}));
var Bknoc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Bknoc500ApplicationJson, _super);
    function Bknoc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bknoc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bknoc500ApplicationJson.prototype, "errorDescription", void 0);
    return Bknoc500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Bknoc500ApplicationJson = Bknoc500ApplicationJson;
var Bknoc502ApplicationJsonErrorEnum;
(function (Bknoc502ApplicationJsonErrorEnum) {
    Bknoc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Bknoc502ApplicationJsonErrorEnum = exports.Bknoc502ApplicationJsonErrorEnum || (exports.Bknoc502ApplicationJsonErrorEnum = {}));
var Bknoc502ApplicationJsonErrorDescriptionEnum;
(function (Bknoc502ApplicationJsonErrorDescriptionEnum) {
    Bknoc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Bknoc502ApplicationJsonErrorDescriptionEnum = exports.Bknoc502ApplicationJsonErrorDescriptionEnum || (exports.Bknoc502ApplicationJsonErrorDescriptionEnum = {}));
var Bknoc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Bknoc502ApplicationJson, _super);
    function Bknoc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bknoc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bknoc502ApplicationJson.prototype, "errorDescription", void 0);
    return Bknoc502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Bknoc502ApplicationJson = Bknoc502ApplicationJson;
var Bknoc503ApplicationJsonErrorEnum;
(function (Bknoc503ApplicationJsonErrorEnum) {
    Bknoc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Bknoc503ApplicationJsonErrorEnum = exports.Bknoc503ApplicationJsonErrorEnum || (exports.Bknoc503ApplicationJsonErrorEnum = {}));
var Bknoc503ApplicationJsonErrorDescriptionEnum;
(function (Bknoc503ApplicationJsonErrorDescriptionEnum) {
    Bknoc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Bknoc503ApplicationJsonErrorDescriptionEnum = exports.Bknoc503ApplicationJsonErrorDescriptionEnum || (exports.Bknoc503ApplicationJsonErrorDescriptionEnum = {}));
var Bknoc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Bknoc503ApplicationJson, _super);
    function Bknoc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bknoc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bknoc503ApplicationJson.prototype, "errorDescription", void 0);
    return Bknoc503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Bknoc503ApplicationJson = Bknoc503ApplicationJson;
var Bknoc504ApplicationJsonErrorEnum;
(function (Bknoc504ApplicationJsonErrorEnum) {
    Bknoc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Bknoc504ApplicationJsonErrorEnum = exports.Bknoc504ApplicationJsonErrorEnum || (exports.Bknoc504ApplicationJsonErrorEnum = {}));
var Bknoc504ApplicationJsonErrorDescriptionEnum;
(function (Bknoc504ApplicationJsonErrorDescriptionEnum) {
    Bknoc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Bknoc504ApplicationJsonErrorDescriptionEnum = exports.Bknoc504ApplicationJsonErrorDescriptionEnum || (exports.Bknoc504ApplicationJsonErrorDescriptionEnum = {}));
var Bknoc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Bknoc504ApplicationJson, _super);
    function Bknoc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Bknoc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Bknoc504ApplicationJson.prototype, "errorDescription", void 0);
    return Bknoc504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Bknoc504ApplicationJson = Bknoc504ApplicationJson;
var BknocRequest = /** @class */ (function (_super) {
    __extends(BknocRequest, _super);
    function BknocRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", BknocRequestBody)
    ], BknocRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", BknocSecurity)
    ], BknocRequest.prototype, "security", void 0);
    return BknocRequest;
}(utils_1.SpeakeasyBase));
exports.BknocRequest = BknocRequest;
var BknocResponse = /** @class */ (function (_super) {
    __extends(BknocResponse, _super);
    function BknocResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], BknocResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], BknocResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Bknoc400ApplicationJson)
    ], BknocResponse.prototype, "bknoc400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Bknoc401ApplicationJson)
    ], BknocResponse.prototype, "bknoc401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Bknoc404ApplicationJson)
    ], BknocResponse.prototype, "bknoc404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Bknoc500ApplicationJson)
    ], BknocResponse.prototype, "bknoc500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Bknoc502ApplicationJson)
    ], BknocResponse.prototype, "bknoc502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Bknoc503ApplicationJson)
    ], BknocResponse.prototype, "bknoc503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Bknoc504ApplicationJson)
    ], BknocResponse.prototype, "bknoc504ApplicationJSONObject", void 0);
    return BknocResponse;
}(utils_1.SpeakeasyBase));
exports.BknocResponse = BknocResponse;
