import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Document Classification Functions
 */
export declare class DocumentClassification {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Classifies the Document as adult or noadult
     *
     * @remarks
     * The Adult Content Detection function classifies the documents as adult or noadult based on their context. It can be used to detect whether a document contains content unsuitable for minors.
     */
    adultContentDetection(req: operations.AdultContentDetectionRequestBody, config?: AxiosRequestConfig): Promise<operations.AdultContentDetectionResponse>;
    /**
     * Classifies the Document as commercial or nocommercial
     *
     * @remarks
     * The Commercial Detection function labels the documents as commercial or non-commercial based on their keywords and expressions. It can be used to detect whether a website is commercial or not.
     */
    commercialDetection(req: operations.CommercialDetectionRequestBody, config?: AxiosRequestConfig): Promise<operations.CommercialDetectionResponse>;
    /**
     * Classifies the Document as educational or noeducational
     *
     * @remarks
     * The Educational Detection function classifies the documents as educational or non-educational based on their context. It can be used to detect whether a website is educational or not.
     */
    educationalDetection(req: operations.EducationalDetectionRequestBody, config?: AxiosRequestConfig): Promise<operations.EducationalDetectionResponse>;
    /**
     * Gender Detection Service
     *
     * @remarks
     * The Gender Detection function identifies if a particular document is written-by or targets-to a man or a woman based on the context, the words and the idioms found in the text.
     */
    genderDetection(req: operations.GenderDetectionRequestBody, config?: AxiosRequestConfig): Promise<operations.GenderDetectionResponse>;
    /**
     * Identifies the Language of the Document
     *
     * @remarks
     * The Language Detection function identifies the natural language of the given document based on its words and context. This classifier is able to detect 96 different languages.
     */
    languageDetection(req: operations.LanguageDetectionRequestBody, config?: AxiosRequestConfig): Promise<operations.LanguageDetectionResponse>;
    /**
     * Evaluates the Readability of the Document
     *
     * @remarks
     * The Readability Assessment function determines the degree of readability of a document based on its terms and idioms. The texts are classified as basic, intermediate and advanced depending their difficulty.
     */
    readabilityAssessment(req: operations.ReadabilityAssessmentRequestBody, config?: AxiosRequestConfig): Promise<operations.ReadabilityAssessmentResponse>;
    /**
     * Identifies the Sentiment of the Document
     *
     * @remarks
     * The Sentiment Analysis function classifies documents as positive, negative or neutral (lack of sentiment) depending on whether they express a positive, negative or neutral opinion.
     */
    sentimentAnalysis(req: operations.SentimentAnalysisRequestBody, config?: AxiosRequestConfig): Promise<operations.SentimentAnalysisResponse>;
    /**
     * Classifies the Document as spam or nospam
     *
     * @remarks
     * The Spam Detection function labels documents as spam or nospam by taking into account their context. It can be used to filter out spam emails and comments.
     */
    spamDetection(req: operations.SpamDetectionRequestBody, config?: AxiosRequestConfig): Promise<operations.SpamDetectionResponse>;
    /**
     * Classifies Document as Subjective or Objective
     *
     * @remarks
     * The Subjectivity Analysis function categorizes documents as subjective or objective based on their writing style. Texts that express personal opinions are labeled as subjective and the others as objective.
     */
    subjectivityAnalysis(req: operations.SubjectivityAnalysisRequestBody, config?: AxiosRequestConfig): Promise<operations.SubjectivityAnalysisResponse>;
    /**
     * Identifies the Topic of the Document
     *
     * @remarks
     * The Topic Classification function assigns documents in 12 thematic categories based on their keywords, idioms and jargon. It can be used to identify the topic of the texts.
     */
    topicClassification(req: operations.TopicClassificationRequestBody, config?: AxiosRequestConfig): Promise<operations.TopicClassificationResponse>;
    /**
     * Identifies the Sentiment of Twitter Messages
     *
     * @remarks
     * The Twitter Sentiment Analysis function allows you to perform Sentiment Analysis on Twitter. It classifies the tweets as positive, negative or neutral depending on their context.
     */
    twitterSentimentAnalysis(req: operations.TwitterSentimentAnalysisRequestBody, config?: AxiosRequestConfig): Promise<operations.TwitterSentimentAnalysisResponse>;
}
