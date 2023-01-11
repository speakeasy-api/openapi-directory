import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ResourceDeleteTypeEnum {
    Resource = "resource"
}


// ResourceDelete
/** 
 * All properties of the resource delete object
**/
export class ResourceDelete extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ResourceDeleteTypeEnum;
}
