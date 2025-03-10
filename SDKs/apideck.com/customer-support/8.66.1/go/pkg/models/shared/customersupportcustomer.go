package shared

import (
	"time"
)

type CustomerSupportCustomerStatusStatusEnum string

const (
	CustomerSupportCustomerStatusStatusEnumActive             CustomerSupportCustomerStatusStatusEnum = "active"
	CustomerSupportCustomerStatusStatusEnumArchived           CustomerSupportCustomerStatusStatusEnum = "archived"
	CustomerSupportCustomerStatusStatusEnumGdprErasureRequest CustomerSupportCustomerStatusStatusEnum = "gdpr-erasure-request"
	CustomerSupportCustomerStatusStatusEnumUnknown            CustomerSupportCustomerStatusStatusEnum = "unknown"
)

type CustomerSupportCustomer struct {
	Addresses    []Address                                `json:"addresses,omitempty"`
	BankAccounts *BankAccount                             `json:"bank_accounts,omitempty"`
	CompanyName  *string                                  `json:"company_name,omitempty"`
	CreatedAt    *time.Time                               `json:"created_at,omitempty"`
	CreatedBy    *string                                  `json:"created_by,omitempty"`
	Currency     *CurrencyEnum                            `json:"currency,omitempty"`
	Emails       []Email                                  `json:"emails,omitempty"`
	FirstName    *string                                  `json:"first_name,omitempty"`
	ID           *string                                  `json:"id,omitempty"`
	Individual   *bool                                    `json:"individual,omitempty"`
	LastName     *string                                  `json:"last_name,omitempty"`
	Notes        *string                                  `json:"notes,omitempty"`
	PhoneNumbers []PhoneNumber                            `json:"phone_numbers,omitempty"`
	Status       *CustomerSupportCustomerStatusStatusEnum `json:"status,omitempty"`
	TaxNumber    *string                                  `json:"tax_number,omitempty"`
	UpdatedAt    *time.Time                               `json:"updated_at,omitempty"`
	UpdatedBy    *string                                  `json:"updated_by,omitempty"`
}
