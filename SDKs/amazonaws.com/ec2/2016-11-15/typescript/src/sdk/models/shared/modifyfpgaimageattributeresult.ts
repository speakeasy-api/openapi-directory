import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModifyFpgaImageAttributeResultFpgaImageAttribute
/** 
 * Information about the attribute.
**/
export class ModifyFpgaImageAttributeResultFpgaImageAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: Record<string, any>;

  @SpeakeasyMetadata()
  fpgaImageId?: Record<string, any>;

  @SpeakeasyMetadata()
  loadPermissions?: Record<string, any>;

  @SpeakeasyMetadata()
  name?: Record<string, any>;

  @SpeakeasyMetadata()
  productCodes?: Record<string, any>;
}


export class ModifyFpgaImageAttributeResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fpgaImageAttribute?: ModifyFpgaImageAttributeResultFpgaImageAttribute;
}
