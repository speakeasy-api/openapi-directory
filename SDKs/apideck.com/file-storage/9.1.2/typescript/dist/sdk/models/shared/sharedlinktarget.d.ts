import { SpeakeasyBase } from "../../../internal/utils";
import { FileTypeEnum } from "./filetypeenum";
export declare class SharedLinkTarget extends SpeakeasyBase {
    /**
     * A unique identifier for an object.
     */
    id: string;
    /**
     * The name of the file
     */
    name?: string;
    /**
     * The type of resource. Could be file, folder or url
     */
    type?: FileTypeEnum;
}
