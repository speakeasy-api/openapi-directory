import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Repository sync event detail data for a sync attempt.
 */
export declare class RepositorySyncEvent extends SpeakeasyBase {
    event: string;
    externalId?: string;
    time: Date;
    type: string;
}
