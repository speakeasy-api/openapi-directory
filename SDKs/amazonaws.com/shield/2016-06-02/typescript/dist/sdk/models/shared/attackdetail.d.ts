import { SpeakeasyBase } from "../../../internal/utils";
import { AttackProperty } from "./attackproperty";
import { Mitigation } from "./mitigation";
import { SubResourceSummary } from "./subresourcesummary";
import { SummarizedCounter } from "./summarizedcounter";
/**
 * The details of a DDoS attack.
 */
export declare class AttackDetail extends SpeakeasyBase {
    attackCounters?: SummarizedCounter[];
    attackId?: string;
    attackProperties?: AttackProperty[];
    endTime?: Date;
    mitigations?: Mitigation[];
    resourceArn?: string;
    startTime?: Date;
    subResources?: SubResourceSummary[];
}
