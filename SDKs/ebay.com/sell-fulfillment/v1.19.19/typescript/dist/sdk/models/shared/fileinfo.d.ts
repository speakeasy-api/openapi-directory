import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type is used by the <strong>files</strong> array, which shows the name, ID, file type, and upload date for each provided evidential file.
 */
export declare class FileInfo extends SpeakeasyBase {
    /**
     * The unique identifier of the evidence file.
     */
    fileId?: string;
    /**
     * The type of file uploaded. Supported file extensions are .JPEG, .JPG, and .PNG., and maximum file size allowed is 1.5 MB.
     */
    fileType?: string;
    /**
     * The seller-provided name of the evidence file.
     */
    name?: string;
    /**
     * The timestamp in this field shows the date/time when the seller uploaded the evidential document to eBay. <br><br>The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: <em>yyyy-MM-ddThh:mm.ss.sssZ</em>. An example would be <code>2019-08-04T19:09:02.768Z</code>.
     */
    uploadedDate?: string;
}
