import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreviewFileAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=imageHash" })
  imageHash?: string;

  @SpeakeasyMetadata({ data: "json, name=pageCount" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;
}


// PreviewFile
/** 
 * Object with preview image properties.
**/
export class PreviewFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: PreviewFileAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
