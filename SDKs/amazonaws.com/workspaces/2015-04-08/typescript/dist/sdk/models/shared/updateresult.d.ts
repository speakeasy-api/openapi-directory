import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Describes whether a WorkSpace image needs to be updated with the latest drivers and other components required by Amazon WorkSpaces.</p> <note> <p>Only Windows 10 WorkSpace images can be programmatically updated at this time.</p> </note>
 */
export declare class UpdateResult extends SpeakeasyBase {
    description?: string;
    updateAvailable?: boolean;
}
