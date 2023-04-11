import { SpeakeasyBase } from "../../../internal/utils";
import { ImportFailureStatusEnum } from "./importfailurestatusenum";
/**
 *  Provides information about an import failure.
 */
export declare class ImportFailureListItem extends SpeakeasyBase {
    errorMessage?: string;
    errorType?: string;
    lastUpdatedTime?: Date;
    location?: string;
    status?: ImportFailureStatusEnum;
}
