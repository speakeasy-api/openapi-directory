package shared

// ModifyFpgaImageAttributeResultFpgaImageAttribute
// Information about the attribute.
type ModifyFpgaImageAttributeResultFpgaImageAttribute struct {
	Description     map[string]interface{}
	FpgaImageID     map[string]interface{}
	LoadPermissions map[string]interface{}
	Name            map[string]interface{}
	ProductCodes    map[string]interface{}
}

type ModifyFpgaImageAttributeResult struct {
	FpgaImageAttribute *ModifyFpgaImageAttributeResultFpgaImageAttribute
}
