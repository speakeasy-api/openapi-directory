import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains details about a specific Map Run.
 */
export declare class MapRunListItem extends SpeakeasyBase {
    executionArn: string;
    mapRunArn: string;
    startDate: Date;
    stateMachineArn: string;
    stopDate?: Date;
}
