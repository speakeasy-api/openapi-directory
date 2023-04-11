import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { CustomField } from "./customfield";
export declare class OpportunityInput extends SpeakeasyBase {
    closeDate?: Date;
    companyId?: string;
    companyName?: string;
    contactId?: string;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    customFields?: CustomField[];
    description?: string;
    leadId?: string;
    /**
     * Lead source
     */
    leadSource?: string;
    lossReason?: string;
    lossReasonId?: string;
    monetaryAmount?: number;
    ownerId?: string;
    pipelineId?: string;
    pipelineStageId?: string;
    primaryContactId: string;
    priority?: string;
    sourceId?: string;
    stageLastChangedAt?: Date;
    status?: string;
    statusId?: string;
    tags?: string[];
    title: string;
    type?: string;
    winProbability?: number;
    wonReason?: string;
    wonReasonId?: string;
}
export declare class Opportunity extends SpeakeasyBase {
    closeDate?: Date;
    companyId?: string;
    companyName?: string;
    contactId?: string;
    createdAt?: Date;
    createdBy?: string;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    customFields?: CustomField[];
    dateLastContacted?: Date;
    dateLeadCreated?: Date;
    dateStageChanged?: Date;
    deleted?: boolean;
    description?: string;
    /**
     * Expected Revenue
     */
    expectedRevenue?: number;
    id?: string;
    interactionCount?: number;
    lastActivityAt?: string;
    leadId?: string;
    /**
     * Lead source
     */
    leadSource?: string;
    lossReason?: string;
    lossReasonId?: string;
    monetaryAmount?: number;
    ownerId?: string;
    pipelineId?: string;
    pipelineStageId?: string;
    primaryContactId: string;
    priority?: string;
    sourceId?: string;
    stageLastChangedAt?: Date;
    status?: string;
    statusId?: string;
    tags?: string[];
    title: string;
    type?: string;
    updatedAt?: Date;
    updatedBy?: string;
    winProbability?: number;
    wonReason?: string;
    wonReasonId?: string;
}
