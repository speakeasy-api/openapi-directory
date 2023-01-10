package shared

type CustomColumnLinks struct {
	Delete         LinksCatalogDeleteCustomColumnLink           `json:"delete"`
	Expression     LinksCatalogGetCustomColumnExpressionLink    `json:"expression"`
	Rename         LinksCatalogChangeCustomColumnUserNameLink   `json:"rename"`
	Save           LinksCatalogSaveCustomColumnLink             `json:"save"`
	SaveExpression LinksCatalogChangeCustomColumnExpressionLink `json:"saveExpression"`
}
