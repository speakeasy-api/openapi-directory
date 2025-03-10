// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// RequiredActivatedType - <p>For extensions that are modules, a public third-party extension that must be activated in your account in order for the module itself to be activated.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/modules.html#module-enabling">Activating public modules for use in your account</a> in the <i>CloudFormation User Guide</i>.</p>
type RequiredActivatedType struct {
	OriginalTypeName       *string
	PublisherID            *string
	SupportedMajorVersions []int64
	TypeNameAlias          *string
}
