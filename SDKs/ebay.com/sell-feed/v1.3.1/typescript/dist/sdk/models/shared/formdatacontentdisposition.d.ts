import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The metadata for the file.
 */
export declare class FormDataContentDisposition extends SpeakeasyBase {
    /**
     * The file creation date. <br /><br /><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.SSSZ</code><p><b>For example:</b><p>Created on September 8, 2019</p><p><code>2019-09-08T00:00:00.000Z</code></p>
     */
    creationDate?: string;
    /**
     * The name of the file including its extension (for example, xml or csv) to be uploaded.
     */
    fileName?: string;
    /**
     * The file modified date. <br /><br /><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.SSSZ</code><p><b>For example:</b><p>Created on September 9, 2019</p><p><code>2019-09-09T00:00:00.000Z</code></p>
     */
    modificationDate?: string;
    /**
     * A content identifier. The only presently supported name is <code>file</code>.
     */
    name?: string;
    /**
     * The parameters you want associated with the file.
     */
    parameters?: Record<string, string>;
    /**
     * The date you read the file. <br /><br /><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.SSSZ</code><p><b>For example:</b><p>Created on September 10, 2019</p><p><code>2019-09-10T00:00:00.000Z</code></p>
     */
    readDate?: string;
    /**
     * The size of the file.
     */
    size?: number;
    /**
     * The file type. The only presently supported type is <code>form-data</code>.
     */
    type?: string;
}
