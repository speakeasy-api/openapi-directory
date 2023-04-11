import { SpeakeasyBase } from "../../../internal/utils";
import { FaqFileFormatEnum } from "./faqfileformatenum";
import { FaqStatusEnum } from "./faqstatusenum";
/**
 * Summary information for frequently asked questions and answers included in an index.
 */
export declare class FaqSummary extends SpeakeasyBase {
    createdAt?: Date;
    fileFormat?: FaqFileFormatEnum;
    id?: string;
    languageCode?: string;
    name?: string;
    status?: FaqStatusEnum;
    updatedAt?: Date;
}
