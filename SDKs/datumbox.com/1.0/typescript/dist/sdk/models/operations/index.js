"use strict";
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./adultcontentdetection"), exports);
__exportStar(require("./commercialdetection"), exports);
__exportStar(require("./documentsimilarity"), exports);
__exportStar(require("./educationaldetection"), exports);
__exportStar(require("./genderdetection"), exports);
__exportStar(require("./keywordextraction"), exports);
__exportStar(require("./languagedetection"), exports);
__exportStar(require("./readabilityassessment"), exports);
__exportStar(require("./sentimentanalysis"), exports);
__exportStar(require("./spamdetection"), exports);
__exportStar(require("./subjectivityanalysis"), exports);
__exportStar(require("./textextraction"), exports);
__exportStar(require("./topicclassification"), exports);
__exportStar(require("./twittersentimentanalysis"), exports);
